import json
import os
def update(id: str, install: str):
    with open(f"../Backend/Guides/{id}.json", "r") as file:
        guide = json.load(file)
    install = json.load(install)
    guide["install"] = install["install"]
    with open(f"../Backend/Guides/{id}.json", "w") as file:
        json.dump(guide, file, indent = 4)
    print("done editing") 
