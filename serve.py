#!/usr/bin/env python3
"""
Simple local development and self-hosting server.
Run with: python3 serve.py [port]
Default port: 8080
"""

import http.server
import socketserver
import sys
import os

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

print(f"=====================================================")
print(f" 🤍 Apology Letter Website is running!")
print(f" -> Open in browser: http://localhost:{PORT}")
print(f" -> Press Ctrl+C to stop.")
print(f"=====================================================")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped gracefully.")

