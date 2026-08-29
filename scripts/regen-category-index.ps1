# Regenerate a category's index.ts by scanning all .ts files (excluding index.ts).
# Usage: powershell -File scripts/regen-category-index.ps1 -Category combat -ConstName COMBAT_SPORTS
param(
  [Parameter(Mandatory=$true)][string]$Category,
  [Parameter(Mandatory=$true)][string]$ConstName
)

$dir = Join-Path (Split-Path $PSScriptRoot -Parent) "lib\data\sports\$Category"
if (-not (Test-Path $dir)) { Write-Error "Directory not found: $dir"; exit 1 }

$files = Get-ChildItem -Path $dir -Filter *.ts | Where-Object { $_.Name -ne "index.ts" } | Sort-Object Name

function KebabToCamel([string]$s) {
  $parts = $s -split "-"
  # If first part is purely numeric, move it to the end so the identifier
  # doesn't start with a digit (invalid in JS/TS).
  if ($parts[0] -match '^\d+$' -and $parts.Length -gt 1) {
    $head = $parts[0]
    $parts = $parts[1..($parts.Length-1)] + @($head)
  }
  $out = $parts[0].ToLower()
  for ($i=1; $i -lt $parts.Length; $i++) {
    $p = $parts[$i]
    if ($p.Length -gt 0) {
      $out += ($p.Substring(0,1).ToUpper() + $p.Substring(1).ToLower())
    }
  }
  # Belt-and-braces: if still starts with a digit, prefix underscore.
  if ($out -match '^\d') { $out = "_$out" }
  return $out
}

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('import type { Sport } from "@/lib/types";')
[void]$sb.AppendLine("")

# Collect (varName, slug) pairs.
$entries = @()
foreach ($f in $files) {
  $slug = [System.IO.Path]::GetFileNameWithoutExtension($f.Name)
  $var  = KebabToCamel $slug
  # Fix a couple edge cases: leading digits require care but our slugs use kebab already.
  $entries += [pscustomobject]@{ Var = $var; Slug = $slug }
}

foreach ($e in $entries) {
  [void]$sb.AppendLine("import { $($e.Var) } from `"./$($e.Slug)`";")
}

[void]$sb.AppendLine("")
[void]$sb.AppendLine("/**")
[void]$sb.AppendLine(" * $Category entries")
[void]$sb.AppendLine(" * Auto-generated from lib/data/sports/$Category/*.ts")
[void]$sb.AppendLine(" */")
[void]$sb.AppendLine("export const ${ConstName}: Sport[] = [")
foreach ($e in $entries) {
  [void]$sb.AppendLine("  $($e.Var),")
}
[void]$sb.AppendLine("];")
[void]$sb.AppendLine("")

$out = Join-Path $dir "index.ts"
Set-Content -Path $out -Value $sb.ToString() -Encoding UTF8
Write-Host "Regenerated $out with $($entries.Count) entries."
