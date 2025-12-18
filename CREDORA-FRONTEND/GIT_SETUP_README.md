# Git Repository Setup Instructions

This script will initialize a git repository and create a commit history spread over 1.5 months (45 days) starting from October 20, 2025.

## Prerequisites

1. **Git must be installed** on your system
   - Download from: https://git-scm.com/download/win
   - Make sure Git is added to your system PATH

2. **PowerShell** (should be available on Windows by default)

## How to Run

1. Open PowerShell in the `CREDORA-FRONTEND` directory
2. Run the script:
   ```powershell
   .\setup-git-history.ps1
   ```

If you get an execution policy error, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run the script again.

## What the Script Does

- Initializes a git repository (if not already initialized)
- Creates 23 commits spread over 45 days (Oct 20, 2025 to Dec 3, 2025)
- Each commit represents a logical development milestone
- Commits are dated appropriately to show development progress

## Commit History Overview

The script creates commits for:
- Initial project setup
- Configuration files (ESLint, Vite, etc.)
- Core application files
- Pages (Welcome, Login, Signup, Dashboard)
- Assets and styling
- Project structure setup
- Final touches

## Verify the Setup

After running the script, you can verify with:

```powershell
git log --oneline --graph
git log --pretty=format:"%h - %an, %ar : %s" --date=short
```

## Notes

- The script uses `--allow-empty` for commits that don't have file changes
- Git user name and email are set to "CREDORA Developer" / "developer@credora.com"
- You can change these by editing the script or running:
  ```powershell
  git config user.name "Your Name"
  git config user.email "your.email@example.com"
  ```

