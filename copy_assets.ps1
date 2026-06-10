# PowerShell script to copy extracted branding assets from Downloads to Angular assets folder
$downloadsPath = "C:\Users\pcdev\Downloads"
$assetsPath = "C:\Users\pcdev\ayoub\sahaba\src\assets"

# Ensure target assets folder exists
if (!(Test-Path -Path $assetsPath)) {
    New-Item -ItemType Directory -Force -Path $assetsPath | Out-Null
    Write-Host "Created assets directory at $assetsPath" -ForegroundColor Green
}

$filesToCopy = @("logo.jpg", "logo2.jpg", "afiche1.jpg", "afiche2.jpg", "afiche3.jpg")

foreach ($file in $filesToCopy) {
    $srcFile = Join-Path $downloadsPath $file
    $destFile = Join-Path $assetsPath $file
    
    if (Test-Path -Path $srcFile) {
        Copy-Item -Path $srcFile -Destination $destFile -Force
        Write-Host "Successfully copied $file to assets folder" -ForegroundColor Green
    } else {
        Write-Host "Warning: Source file $file not found in Downloads ($downloadsPath)" -ForegroundColor Yellow
    }
}

Write-Host "Asset copy process complete!" -ForegroundColor Cyan
