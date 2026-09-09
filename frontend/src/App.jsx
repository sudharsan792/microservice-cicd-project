import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Product API error:', error))
  }, [])

  return (
    <div className="app">
      <header className="navbar">
        <h1>🛒 Vayoo Shop</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </nav>

        <button className="cart">🛍️ Cart (0)</button>
      </header>

      <section className="hero" id="home">
        <div>
          <h2>Welcome to Vayoo Shop</h2>
          <p>
            Your simple e-commerce platform powered by microservices.
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </section>

      <section className="products" id="products">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">🛍️</div>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <strong>₹{product.price}</strong>

              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <footer id="about">
        <p>© 2026 Vayoo Shop | Microservice E-Commerce Platform</p>
      </footer>
    </div>
  )
}

export default App