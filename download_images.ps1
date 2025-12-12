
$files = @(
    @("Leatherman.jpg", "leatherman.jpg"),
    @("Aeropress_setup.jpg", "aeropress.jpg"),
    @("CORDLESS_DRILL.jpg", "dewalt-drill.jpg"),
    @("Bluetooth_Speaker.jpg", "jbl-speaker.jpg"),
    @("DJI_Mavic_3_Cine_-_Front.jpg", "dji-drone.jpg")
)

$baseUrl = "https://upload.wikimedia.org/wikipedia/commons"
$saveDir = "public\images"

if (!(Test-Path -Path $saveDir)) {
    New-Item -ItemType Directory -Path $saveDir | Out-Null
}

$md5 = [System.Security.Cryptography.HashAlgorithm]::Create('MD5')

foreach ($pair in $files) {
    $wikiName = $pair[0]
    $localName = $pair[1]
    
    $cleanName = $wikiName -replace " ", "_"
    
    # Calculate MD5
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($cleanName)
    $hashBytes = $md5.ComputeHash($bytes)
    $hashString = [BitConverter]::ToString($hashBytes) -replace "-", ""
    $hashString = $hashString.ToLower()
    
    $a = $hashString.Substring(0, 1)
    $ab = $hashString.Substring(0, 2)
    
    $url = "$baseUrl/$a/$ab/$cleanName"
    $outputPath = Join-Path -Path $saveDir -ChildPath $localName
    
    Write-Host "Attempting: $url"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath -UserAgent "CoolBot/0.0" -ErrorAction Stop
        Write-Host "Success: $localName"
    }
    catch {
        Write-Host "Failed: $_"
    }
}
