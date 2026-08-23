from groq import Groq
from pydantic import BaseModel, ConfigDict
from typing import List
import json


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
- Return only the requested structured data.
"""
        },
        {
            "role": "user",
            "content": "Generate an installation guide for TypeScript."
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

data = json.loads(response.choices[0].message.content)

guide = Guide.model_validate(data)

print(guide.model_dump_json(indent=2))
