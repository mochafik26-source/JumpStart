import json
import os
def update():
    with open("../Backend/Guides/Rust.json", "r") as file:
        guide = json.load(file)
    guide["install"]["arch"] = ["test"]

    with open("../Backend/Guides/Rust.json", "w") as file:
        json.dump(guide, file, indent = 4)
update()
