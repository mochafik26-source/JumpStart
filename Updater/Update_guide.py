import json
import os
def update(id: str, install: list[str]):
    with open(f"../Backend/Guides/{id}.json", "r") as file:
        guide = json.load(file)

    #guide["install"]["arch"] = install
    print(guide)
    #with open(f"../Backend/Guides/{id}.json", "w") as file:
     #   json.dump(guide, file, indent = 4)
