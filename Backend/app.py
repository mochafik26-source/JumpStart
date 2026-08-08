import json

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/<technology>", methods=["GET"])
def get_guide(technology):
    with open(f"./Guides/{technology}.json", "r") as file:
        guide = json.load(file)

    return jsonify(guide), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
