import { useState, useEffect } from "react";
import axios from "axios";
import "../css/SignupPage.css"

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !password2) {
      setMessage("Please fill all fields");
      return;
    }

    if (password !== password2) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
      });

      setMessage("Account Created! Redirecting to login...");
      setTimeout(() => {
        window.location.href = "http://localhost:5173/login"; // Redirect to login page
      }, 2000);
    } catch (error) {
      setMessage("Signup Failed: " + (error.response?.data?.error || "Unknown error"));
      console.error(error);
    }
  };
  return (
    <div className="signup-page">
      <img src="src/assets/images/backgrounds/background.jpg" alt="" className="login-background" />
      <div className="bg-gradient"></div>
      <div className="signup-section">
        <a href="http://localhost:5173/"className="page-logo">TREXA</a>
        <h1>Create an Account</h1>
        <form id="signup-form" onSubmit={handleSubmit}>
            <input type="text" id="fullname" placeholder="Enter your full name" onChange={(e) => setName(e.target.value)} required/>
            <input type="email" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" id="confirm-password" placeholder="Confirm your password" onChange={(e) => setPassword2(e.target.value)} required />
            <button type="submit" className="signup-btn"> Sign Up </button>
        </form>
        <div className="divert">
            <p> Already have an account? <a href="http://localhost:5173/login">Sign In</a> </p>
        </div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

export default SignupPage;
