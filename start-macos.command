#!/bin/zsh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

if ! command -v python3 >/dev/null 2>&1; then
  open "$SCRIPT_DIR/index.html"
  echo "未找到 Python 3，已使用浏览器直接打开资源库。"
  echo "如果字体或组件预览被浏览器限制，请安装 Python 3 后重新双击此文件。"
  read -r "?按回车键关闭窗口。"
  exit 0
fi

python3 -m http.server 4173 --bind 127.0.0.1 &
SERVER_PID=$!
trap 'kill $SERVER_PID 2>/dev/null' EXIT INT TERM
sleep 1
open "http://127.0.0.1:4173/"

echo "设记已在浏览器中打开。关闭这个窗口即可停止本地服务。"
wait $SERVER_PID
