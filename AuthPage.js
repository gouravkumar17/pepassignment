import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";
function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", dob: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignUp ? "https://backend-7uny.onrender.com/signup" : "https://backend-7uny.onrender.com/signin";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(data.message);

    if (data.success && !isSignUp) {
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/products");
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <input type="text" name="name" placeholder="Name" className="auth-input" required onChange={handleChange}/>
          )}
          <input type="email" name="email" placeholder="Email" className="auth-input" required onChange={handleChange}/>
          {isSignUp && (
            <input type="date" name="dob" className="auth-input" required onChange={handleChange}/>
          )}
          <input type="password" name="password" placeholder="Password" className="auth-input" required onChange={handleChange}/>
          <button className="auth-button" type="submit">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="auth-toggle-text">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsSignUp(!isSignUp)} className="auth-toggle-button">
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
export default AuthPage;
