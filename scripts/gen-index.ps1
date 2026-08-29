param(
  [Parameter(Mandatory=$true)]
  [string]$Category,
  [Parameter(Mandatory=$true)]
  [string]$ExportName,
  [Parameter(Mandatory=$true)]
  [string]$Description
)

$dir = Join-Path (Split-Path -Parent $PSScriptRoot) "lib\data\sports\$Category"
$files = Get-ChildItem $dir -Filter "*.ts" | Where-Object { $_.Name -ne "index.ts" -and $_.Name -notlike "_*" } | Sort-Object BaseName

$imports = @()
$arrayEntries = @()

foreach ($file in $files) {
  $slug = $file.BaseName
  # Read file to find the actual export name
  $content = Get-Content $file.FullName -Raw
  if ($content -match "export\s+const\s+(\w+)\s*:\s*Sport") {
    $exp = $Matches[1]
    $imports += "import { $exp } from `"./$slug`";"
    $arrayEntries += "  $exp,"
  }
}

$importBlock = $imports -join "`n"
$arrayBlock = $arrayEntries -join "`n"

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('import type { Sport } from "@/lib/types";')
[void]$sb.AppendLine('')
[void]$sb.AppendLine($importBlock)
[void]$sb.AppendLine('')
[void]$sb.AppendLine('/**')
[void]$sb.AppendLine(" * $Description")
[void]$sb.AppendLine(" * Sourced from ``lib/data/sports/$Category/*.ts``.")
[void]$sb.AppendLine(' */')
[void]$sb.AppendLine("export const $ExportName" + ": Sport[] = [")
[void]$sb.AppendLine($arrayBlock)
[void]$sb.AppendLine('];')

$indexPath = Join-Path $dir "index.ts"
Set-Content -Path $indexPath -Value $sb.ToString() -Encoding utf8
Write-Host "Wrote $indexPath ($($files.Count) entries)"
