# ==========================================================
# INFANTO WESELY R — GITHUB & VERCEL AUTO-SYNC SCRIPT
# Automatically stages all changes, commits, and pushes to GitHub.
# When pushed, Vercel automatically detects the new commit and
# updates your LIVE website within 15-30 seconds!
#
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

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Syncing changes to GitHub: Infantorex/infanto-wesely-portfolio" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Check status
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "[OK] Working tree clean. Pushing latest commits to GitHub..." -ForegroundColor Green
    git push origin main
    Write-Host "`n[SUCCESS] GitHub updated -> Vercel will auto-deploy the live site!" -ForegroundColor Green
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
    Write-Host "`n==========================================================" -ForegroundColor Green
    Write-Host " [SUCCESS] PUSHED TO GITHUB & LIVE VERCEL DEPLOYMENT TRIGGERED!" -ForegroundColor Green
    Write-Host " Repository: https://github.com/Infantorex/infanto-wesely-portfolio" -ForegroundColor Cyan
    Write-Host " Vercel is now building and updating your live website." -ForegroundColor Cyan
    Write-Host "==========================================================" -ForegroundColor Green
} else {
    Write-Host "`n[WARNING] Push encountered an issue. Check network connection or permissions." -ForegroundColor Red
}
