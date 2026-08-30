from LoopTech import loop
from Request import generate_guide
def main():
    values = loop()
    for i in values:
        guide = generate_guide("rust")
        print(guide)
main()

