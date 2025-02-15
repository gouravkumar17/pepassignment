import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

function CartPage({ cart, removeFromCart }) {
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item._id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <h3>{item.name}</h3>
            <p>Price: ${item.cost}</p>
            <button className="remove-button" onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <button className="checkout-button" onClick={() => alert("Proceeding to checkout...")}>
          Checkout
        </button>
      )}<br></br>
      <button className="back-button" onClick={() => navigate("/products")}>
        Back to Products
      </button>
    </div>
  );
}

export default CartPage;
