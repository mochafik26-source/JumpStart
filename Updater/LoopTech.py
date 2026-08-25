from pathlib import Path
import json

folder = Path("../Backend/Guides")

technologies = [file.stem for file in folder.glob("*.json")]

print(technologies)
