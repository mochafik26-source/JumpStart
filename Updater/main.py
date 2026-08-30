from LoopTech import loop
from Request import generate_guide
from Update_guide import update
def main():
    values = loop()
    for i in values:
        guide = generate_guide(i)
        update(guide.name, guide.install, guide.verify)
main()
