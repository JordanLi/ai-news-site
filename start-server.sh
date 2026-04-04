#!/bin/bash

echo "===================================="
echo "   AI 资讯展示页面"
echo "===================================="
echo ""

# 检查 Python 3
if command -v python3 &> /dev/null; then
    echo "✓ 使用 Python 3 启动服务器..."
    echo ""
    echo "访问地址: http://localhost:8000/ai-news.html"
    echo "按 Ctrl+C 停止服务器"
    echo ""
    python3 -m http.server 8000
else
    echo "✗ 未找到 Python 3，请先安装 Python"
    echo ""
    echo "安装方法:"
    echo "  macOS: brew install python"
    echo "  Ubuntu: sudo apt install python3"
fi
