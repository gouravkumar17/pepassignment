import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductPage.css";

function ProductPage({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://backend-7uny.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="product-container">
      <h2 className="product-title">Available Products</h2>
      <Link to="/cart" className="cart-link">Go to Cart</Link>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product._id.$oid}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-cost">Price: ${product.cost}</p>
            <p className="product-rating">⭐ {product.rating}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
