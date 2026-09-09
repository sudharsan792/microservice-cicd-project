from flask import Flask, jsonify, request

app = Flask(__name__)

cart = []

@app.route("/")
def home():
    return "Cart Service is running!"

@app.route("/cart", methods=["GET"])
def get_cart():
    return jsonify(cart)

@app.route("/cart", methods=["POST"])
def add_to_cart():
    product = request.json
    cart.append(product)
    return jsonify({
        "message": "Product added to cart",
        "cart": cart
    }), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)