# ==========================================================
# INFANTO WESELY R — GITHUB AUTO-SYNC SCRIPT
# Automatically stages all changes, commits, and pushes to GitHub
# Usage:
#   .\sync.ps1 "Your commit message"
#   .\sync.ps1   (uses default timestamped message)
# ==========================================================

param (
    [string]$Message = ""
)

if ([string]::IsNullOrWhiteSpace($Message)) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $Message = "Update portfolio: $timestamp"
}

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host " Syncing changes to GitHub: Infantorex/infanto-wesely-portfolio" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

# 1. Check status
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "[OK] Working tree clean. No local modifications to push." -ForegroundColor Green
    git push origin main
    exit 0
}

# 2. Stage changes
Write-Host "[1/3] Staging modified files..." -ForegroundColor Yellow
git add -A

# 3. Commit
Write-Host "[2/3] Committing changes: '$Message'..." -ForegroundColor Yellow
git commit -m "$Message"

# 4. Push to remote
Write-Host "[3/3] Pushing to GitHub (origin/main)..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[SUCCESS] Successfully synced and pushed to GitHub!" -ForegroundColor Green
    Write-Host "Repository: https://github.com/Infantorex/infanto-wesely-portfolio" -ForegroundColor Cyan
} else {
    Write-Host "`n[WARNING] Push encountered an issue. Check network connection or permissions." -ForegroundColor Red
}
