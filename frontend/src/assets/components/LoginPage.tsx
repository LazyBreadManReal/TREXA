import { useState, useEffect } from "react";
import axios from "axios";
import "../css/LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      window.location.href = "http://localhost:5173/profile";
      return;
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setMessage("Login successful!");

      window.location.href = "http://localhost:5173/"; // Redirect to dashboard
    } catch (error) {
      setMessage("Invalid email or password.");
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <img src="src/assets/images/backgrounds/background.jpg" alt="" className="login-background" />
      <div className="bg-gradient"></div>
      <div className="login-section">
        <a href="http://localhost:5173/"className="page-logo">TREXA</a>
        <h1>Login to Your Account</h1>
        <p>Login using social networks</p>
        <div className="socials-icons">
                <img src="src/assets/images/icons/google-black.png" alt="" />
                <img src="src/assets/images/icons/facebook-black.png" alt="" />
                <img src="src/assets/images/icons/instagram-black.png" alt="" />
        </div>
        <form id="login-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="login-btn">Sign In</button>
        </form>
        <div className="divert">
          <p>Don't have an account? <a href="http://localhost:5173/signup">Sign Up</a></p>
        </div>
        <div>{message}</div>
      </div>
    </div>
  );
}

export default LoginPage;
