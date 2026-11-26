#!/usr/bin/python3
"""Register this folder with the current macOS user's launchd."""
import os
from pathlib import Path
import plistlib
import subprocess
import sys

root = Path(__file__).resolve().parent
label = "local.christmas-tree.photos"
domain = "gui/" + str(os.getuid())
plist = Path.home() / "Library" / "LaunchAgents" / (label + ".plist")
script = root / "assets" / "sync-photos.py"

if "--remove" in sys.argv:
    subprocess.run(["launchctl", "bootout", domain + "/" + label], check=False)
    plist.unlink(missing_ok=True)
else:
    subprocess.run(["/usr/bin/python3", str(script)], check=True)
    config = {"Label": label, "ProgramArguments": ["/usr/bin/python3", str(script)],
              "StandardErrorPath": str(Path.home() / "Library" / "Logs" / (label + ".log")),
              "WatchPaths": [str(root / "photos")], "StartInterval": 30, "RunAtLoad": True}
    plist.parent.mkdir(parents=True, exist_ok=True)
    if plist.exists():
        subprocess.run(["launchctl", "bootout", domain + "/" + label], check=False)
    plist.write_bytes(plistlib.dumps(config))
    subprocess.run(["launchctl", "bootstrap", domain, str(plist)], check=True)
    print("照片自动同步已启用。可以关闭此窗口，双击 index.html。")
