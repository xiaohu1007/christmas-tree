"""Build the local WebGL texture list when the photos directory changes."""
import base64
import hashlib
import json
import os
from pathlib import Path
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "assets" / "photos.js"
FORMATS = {".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif", ".gif", ".avif", ".tif", ".tiff", ".bmp"}


def snapshot():
    entries = []
    for path in sorted((ROOT / "photos").iterdir()):
        if path.name.startswith(".") or path.is_symlink() or path.suffix.lower() not in FORMATS or not path.is_file():
            continue
        stat = path.stat()
        entries.append((path, stat.st_size, stat.st_mtime_ns, stat.st_ino))
    return entries


def sync():
    entries = snapshot()
    signature = hashlib.sha256(repr(entries).encode()).hexdigest()
    header = "// " + signature + "\n"
    if INDEX.exists():
        with INDEX.open() as existing:
            if existing.readline() == header:
                return
    textures = {}
    order = []
    with tempfile.TemporaryDirectory() as tmp:
        preview = Path(tmp) / "photo.jpg"
        for photo, *_ in entries:
            digest = hashlib.sha256(photo.read_bytes()).hexdigest()
            if digest not in textures:
                result = subprocess.run(["/usr/bin/sips", "-Z", "1024", "-s", "format", "jpeg",
                                         str(photo), "--out", str(preview)], capture_output=True)
                if result.returncode or not preview.exists():
                    continue
                textures[digest] = "data:image/jpeg;base64," + base64.b64encode(preview.read_bytes()).decode()
                preview.unlink()
            order.append(digest)
    if snapshot() != entries:
        return
    indices = {digest: index for index, digest in enumerate(textures)}
    with tempfile.NamedTemporaryFile(mode="w", dir=INDEX.parent, delete=False) as out:
        out.write(header + "window.treeAlbum = (() => {\nconst images = ")
        json.dump(list(textures.values()), out)
        out.write(";\nreturn " + json.dumps([indices[d] for d in order]) + ".map(i => images[i]);\n})();\n")
    os.chmod(out.name, 0o644)
    os.replace(out.name, INDEX)


if __name__ == "__main__":
    sync()
