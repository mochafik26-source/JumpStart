from LoopTech import loop
from Request import generate_guide
from Update_guide import update
def main():
    values = loop()
    for i in values:
        guide = generate_guide(i)
        update(i, guide)
main()
