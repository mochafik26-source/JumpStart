import json
from pathlib import Path

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow requests from your Next.js frontend
CORS(app)

GUIDES_DIR = Path(__file__).resolve().parent / "Guides"


@app.route("/<technology>", methods=["GET"])
def get_guide(technology):
    guide_path = GUIDES_DIR / f"{technology}.json"

    if not guide_path.is_file():
        return jsonify({"error": "Technology guide not found"}), 404

    try:
        with guide_path.open("r", encoding="utf-8") as file:
            guide = json.load(file)

        return jsonify(guide), 200

    except json.JSONDecodeError:
        return jsonify({"error": "Invalid guide JSON"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
