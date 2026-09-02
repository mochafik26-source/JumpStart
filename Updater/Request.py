from groq import Groq
from pydantic import BaseModel, ConfigDict
from typing import List
import json
import os

class Install(BaseModel):
    model_config = ConfigDict(extra="forbid")

    arch: List[str]
    ubuntu: List[str]
    all: List[str]


class Guide(BaseModel):
    model_config = ConfigDict(extra="forbid")

    id: str
    name: str
    install: Install
    verify: List[str]


client = Groq()


def generate_guide(technology: str) -> str:
    response = client.chat.completions.create(
        model="openai/gpt-oss-20b",

        messages=[
            {
                "role": "system",
                "content": """
You generate installation guides for programming technologies.

Generate accurate installation commands for:
- Arch Linux
- Ubuntu
- All platforms

Rules:
- Use commonly recommended installation methods.
- Do not invent commands.
- Include commands needed to install dependencies.
- Include commands to verify the installation.
- On Arch Linux, never use "pacman -Sy" without "-u".
- Return only the requested structured data.
"""
            },
            {
                "role": "user",
                "content": f"Generate an installation guide for {technology}."
            }
        ],

        response_format={
            "type": "json_schema",
            "json_schema": {
                "name": "installation_guide",
                "strict": True,
                "schema": Guide.model_json_schema()
            }
        }
    )

    # Get JSON returned by the AI
    content = response.choices[0].message.content

    # Convert JSON string -> Python dictionary
    data = json.loads(content)

    # Validate using Pydantic
    guide = Guide.model_validate(data)

    # Convert validated Guide -> JSON string
    return guide.model_dump_json(indent=4)


def main():
    technology = "Rust"

    json_string = generate_guide(technology)

    print(json_string)


if __name__ == "__main__":
    main()
