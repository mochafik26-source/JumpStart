from LoopTech import loop
import json
from Request import generate_guide
from Update_guide import update
def main():
    values = loop()
    times = 0
    for i in values:
        guide = generate_guide(i)
        print(guide)
        times+= 1
        if times == 5:
            break
        #update(i, guide)
main()
