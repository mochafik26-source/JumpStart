import json
import os
def update(id: str, installer: str):
    print(id)
    with open(f"../Backend/Guides/{id}.json", "r") as file:
        guide = json.load(file)
    instal = json.loads(installer)
    guide = instal
    with open(f"../Backend/Guides/{id}.json", "w") as file:
        json.dump(guide, file, indent = 4)
