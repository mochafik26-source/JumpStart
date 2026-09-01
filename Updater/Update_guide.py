import json
import os
def update(id: str, installer: str):
    print(id)
    with open(f"../Backend/Guides/{id}.json", "r") as file:
        guide = json.load(file)
    #guide = gd
    instal = json.loads(installer)
    #guide["install"] = instal["install"]
    print(guide)
    #with open(f"../Backend/Guides/{id}.json", "w") as file:
     #   json.dump(guide, file, indent = 4)
    #print("done editing") 
