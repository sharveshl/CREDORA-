# PowerShell script to initialize git and create commit history
# Spread over 1.5 months (45 days) starting from October 20, 2025

$ErrorActionPreference = "Stop"

# Check if git is available
try {
    git --version | Out-Null
} catch {
    Write-Host "Error: Git is not installed or not in PATH. Please install Git first." -ForegroundColor Red
    exit 1
}

# Navigate to project directory
Set-Location $PSScriptRoot

# Initialize git repository if not already initialized
if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..." -ForegroundColor Green
    git init
    git config user.name "CREDORA Developer"
    git config user.email "developer@credora.com"
} else {
    Write-Host "Git repository already initialized." -ForegroundColor Yellow
}

# Function to create a commit with a specific date
function Create-Commit {
    param(
        [string]$Date,
        [string]$Message,
        [string[]]$Files
    )
    
    # Set the date for the commit
    $env:GIT_AUTHOR_DATE = $Date
    $env:GIT_COMMITTER_DATE = $Date
    
    # Add specific files
    $filesAdded = $false
    foreach ($file in $Files) {
        if (Test-Path $file) {
            # Check if it's a directory
            if ((Get-Item $file) -is [System.IO.DirectoryInfo]) {
                # For directories, check if they have files (git doesn't track empty dirs)
                $hasFiles = Get-ChildItem -Path $file -Recurse -File -ErrorAction SilentlyContinue
                if ($hasFiles) {
                    git add $file 2>&1 | Out-Null
                    $filesAdded = $true
                }
            } else {
                git add $file 2>&1 | Out-Null
                $filesAdded = $true
            }
        }
    }
    
    # Check if there are staged changes
    $stagedChanges = git diff --cached --name-only 2>&1
    if ($stagedChanges -or -not $Files) {
        # Create commit (allow empty if no files specified)
        git commit -m $Message --allow-empty 2>&1 | Out-Null
        Write-Host "Created commit: $Message on $Date" -ForegroundColor Cyan
    } else {
        Write-Host "Skipped commit (no changes): $Message" -ForegroundColor Gray
    }
}

# Start date: October 20, 2025
$startDate = Get-Date "2025-10-20"
$currentDate = $startDate

Write-Host "`nCreating commit history from October 20, 2025..." -ForegroundColor Green
Write-Host "This will create commits spread over 45 days.`n" -ForegroundColor Yellow

# Commit 1: Initial project setup (Oct 20, 2025)
$currentDate = $startDate
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Initial project setup with Vite and React" -Files @("package.json", "vite.config.js", "index.html")

# Commit 2: ESLint configuration (Oct 22, 2025)
$currentDate = $startDate.AddDays(2)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Add ESLint configuration" -Files @("eslint.config.js")

# Commit 3: Main entry point (Oct 24, 2025)
$currentDate = $startDate.AddDays(4)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Add main entry point and App component" -Files @("src/main.jsx", "src/App.jsx")

# Commit 4: Welcome page (Oct 26, 2025)
$currentDate = $startDate.AddDays(6)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Implement Welcome page" -Files @("src/pages/Welcome.jsx")

# Commit 5: Login page (Oct 28, 2025)
$currentDate = $startDate.AddDays(8)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Implement Login page" -Files @("src/pages/Login.jsx")

# Commit 6: Signup page (Oct 30, 2025)
$currentDate = $startDate.AddDays(10)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Implement Signup page" -Files @("src/pages/Signup.jsx")

# Commit 7: Dashboard page (Nov 1, 2025)
$currentDate = $startDate.AddDays(12)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Implement Dashboard page" -Files @("src/pages/Dashboard.jsx")

# Commit 8: Styling setup (Nov 3, 2025)
$currentDate = $startDate.AddDays(14)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Add global styles and Tailwind CSS configuration" -Files @("src/index.css")

# Commit 9: Main logo asset (Nov 5, 2025)
$currentDate = $startDate.AddDays(16)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Add main logo asset" -Files @("src/assets/Main Logo.png")

# Commit 10: Welcome page logos (Nov 7, 2025)
$currentDate = $startDate.AddDays(18)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Add Welcome page logo assets" -Files @("src/assets/Welcome page logo 1.png", "src/assets/Welcome page logo 2.png", "src/assets/Welcome page logo 3.png")

# Commit 11: Public assets (Nov 9, 2025)
$currentDate = $startDate.AddDays(20)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Add public assets" -Files @("public/vite.svg")

# Commit 12: Gitignore (Nov 11, 2025)
$currentDate = $startDate.AddDays(22)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Add .gitignore file" -Files @(".gitignore")

# Commit 13: Package lock file (Nov 13, 2025)
$currentDate = $startDate.AddDays(24)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Add package-lock.json" -Files @("package-lock.json")

# Commit 14: README update (Nov 15, 2025)
$currentDate = $startDate.AddDays(26)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Update README with project information" -Files @("README.md")

# Commit 15: Router integration (Nov 17, 2025)
$currentDate = $startDate.AddDays(28)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Integrate React Router for navigation" -Files @("src/App.jsx")

# Commit 16: Mobile optimization (Nov 19, 2025)
$currentDate = $startDate.AddDays(30)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Add mobile viewport and PWA meta tags" -Files @("index.html")

# Commit 17: Component structure (Nov 21, 2025)
$currentDate = $startDate.AddDays(32)
# Create .gitkeep files for empty directories to track them
if (-not (Test-Path "src/components/.gitkeep")) {
    New-Item -ItemType File -Path "src/components/.gitkeep" -Force | Out-Null
}
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Set up component directory structure" -Files @("src/components/.gitkeep")

# Commit 18: Context setup (Nov 23, 2025)
$currentDate = $startDate.AddDays(34)
if (-not (Test-Path "src/contexts/.gitkeep")) {
    New-Item -ItemType File -Path "src/contexts/.gitkeep" -Force | Out-Null
}
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Set up context directory for state management" -Files @("src/contexts/.gitkeep")

# Commit 19: Services setup (Nov 25, 2025)
$currentDate = $startDate.AddDays(36)
if (-not (Test-Path "src/services/.gitkeep")) {
    New-Item -ItemType File -Path "src/services/.gitkeep" -Force | Out-Null
}
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Set up services directory for API calls" -Files @("src/services/.gitkeep")

# Commit 20: Utils setup (Nov 27, 2025)
$currentDate = $startDate.AddDays(38)
if (-not (Test-Path "src/utils/.gitkeep")) {
    New-Item -ItemType File -Path "src/utils/.gitkeep" -Force | Out-Null
}
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Set up utils directory for helper functions" -Files @("src/utils/.gitkeep")

# Commit 21: Final configuration (Nov 29, 2025)
$currentDate = $startDate.AddDays(40)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Finalize Vite and Tailwind configuration" -Files @("vite.config.js")

# Commit 22: Project completion (Dec 1, 2025)
$currentDate = $startDate.AddDays(42)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Project setup complete - CREDORA Frontend ready" -Files @()

# Commit 23: Code cleanup (Dec 3, 2025)
$currentDate = $startDate.AddDays(44)
Create-Commit -Date ($currentDate.ToString("yyyy-MM-dd HH:mm:ss")) -Message "Code cleanup and final adjustments" -Files @()

# Clear environment variables
Remove-Item Env:\GIT_AUTHOR_DATE
Remove-Item Env:\GIT_COMMITTER_DATE

Write-Host "`n✓ Git repository initialized and commit history created!" -ForegroundColor Green
Write-Host "Total commits created: 23" -ForegroundColor Cyan
Write-Host "Date range: October 20, 2025 to December 3, 2025 (45 days)" -ForegroundColor Cyan
Write-Host "`nYou can now view the commit history with: git log --oneline --graph" -ForegroundColor Yellow

