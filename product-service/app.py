from flask import Flask, jsonify

app = Flask(__name__)

products = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "description": "High quality wireless headphones",
        "price": 1999
    },
    {
        "id": 2,
        "name": "Smart Watch",
        "description": "Smart watch with fitness tracking",
        "price": 2499
    },
    {
        "id": 3,
        "name": "Running Shoes",
        "description": "Comfortable sports running shoes",
        "price": 1799
    }
]

@app.route("/")
def home():
    return "Product Service is running!"

@app.route("/products")
def get_products():
    return jsonify(products)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
