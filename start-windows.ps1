$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 4173
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)

function Get-ContentType([string]$path) {
  switch ([System.IO.Path]::GetExtension($path).ToLowerInvariant()) {
    ".html"  { "text/html; charset=utf-8" }
    ".js"    { "text/javascript; charset=utf-8" }
    ".css"   { "text/css; charset=utf-8" }
    ".json"  { "application/json; charset=utf-8" }
    ".png"   { "image/png" }
    ".jpg"   { "image/jpeg" }
    ".jpeg"  { "image/jpeg" }
    ".webp"  { "image/webp" }
    ".svg"   { "image/svg+xml" }
    ".woff2" { "font/woff2" }
    ".woff"  { "font/woff" }
    ".ttf"   { "font/ttf" }
    ".otf"   { "font/otf" }
    default   { "application/octet-stream" }
  }
}

try {
  $listener.Start()
  Start-Process "http://127.0.0.1:$port/"
  Write-Host "Design Memory is open. Keep this window open while browsing."
  Write-Host "Press Ctrl+C or close this window to stop."

  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
      $requestLine = $reader.ReadLine()
      while (($line = $reader.ReadLine()) -ne "" -and $null -ne $line) {}

      $requestPath = if ($requestLine -match '^GET\s+([^\s]+)') { $Matches[1] } else { "/" }
      $requestPath = $requestPath.Split('?')[0]
      $relativePath = [System.Uri]::UnescapeDataString($requestPath.TrimStart('/'))
      if ([string]::IsNullOrWhiteSpace($relativePath)) { $relativePath = "index.html" }

      $candidate = [System.IO.Path]::GetFullPath((Join-Path $root $relativePath.Replace([char]'/', [System.IO.Path]::DirectorySeparatorChar)))
      $rootPrefix = [System.IO.Path]::GetFullPath($root) + [System.IO.Path]::DirectorySeparatorChar

      if (!$candidate.StartsWith($rootPrefix, [System.StringComparison]::OrdinalIgnoreCase) -or !(Test-Path $candidate -PathType Leaf)) {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
        $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
      } else {
        $body = [System.IO.File]::ReadAllBytes($candidate)
        $header = "HTTP/1.1 200 OK`r`nContent-Type: $(Get-ContentType $candidate)`r`nContent-Length: $($body.Length)`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
      }

      $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
      $stream.Write($headerBytes, 0, $headerBytes.Length)
      $stream.Write($body, 0, $body.Length)
      $stream.Flush()
    } finally {
      $client.Close()
    }
  }
} finally {
  $listener.Stop()
}
