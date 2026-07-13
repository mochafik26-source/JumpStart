import json

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api", methods=["GET"])
def fetch():
    with open("./Guides/react_setup.json", "r") as file:
        guide = json.load(file)

    return jsonify(guide), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
