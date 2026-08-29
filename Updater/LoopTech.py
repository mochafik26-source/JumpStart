from pathlib import Path
import json

def loop():
    folder = Path("../Backend/Guides")

    technologies = [file.stem for file in folder.glob("*.json")]
    return technologies
