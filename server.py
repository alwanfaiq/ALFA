import http.server
import socketserver
import os
import sys
import socket
import webbrowser
import threading
import time

DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    protocol_version = 'HTTP/1.1'
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        '.webp': 'image/webp',
        '.svg': 'image/svg+xml',
        '.json': 'application/json',
        '.woff2': 'font/woff2',
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def log_message(self, format, *args):
        # Compact log
        if len(args) >= 2:
            sys.stdout.write(f"  [OK] {args[0]} -> {args[1]}\n")

def find_available_port(preferred=(8888, 3000, 3333, 4000, 5500, 8080)):
    for p in preferred:
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind(('127.0.0.1', p))
                return p
        except OSError:
            continue
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]

def open_browser(port):
    time.sleep(0.8)
    webbrowser.open(f'http://localhost:{port}')

class ThreadingHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = True
    request_queue_size = 128

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    port = find_available_port()
    try:
        with ThreadingHTTPServer(('127.0.0.1', port), Handler) as httpd:
            print("========================================================")
            print("  ALFA | History of Islam - Local Server v1.6.2")
            print("========================================================")
            print(f"  Local URL : http://localhost:{port}")
            print(f"  Directory : {DIRECTORY}")
            print("--------------------------------------------------------")
            print("  Browser akan terbuka otomatis dalam 1 detik...")
            print("  Tekan Ctrl+C di jendela ini jika ingin berhenti.")
            print("========================================================")
            print()
            threading.Thread(target=open_browser, args=(port,), daemon=True).start()
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer dihentikan.")
        sys.exit(0)
    except Exception as e:
        print(f"\n[ERROR] Gagal menjalankan server: {e}")
        input("Tekan Enter untuk keluar...")
