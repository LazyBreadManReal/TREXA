import { useState, useEffect } from "react";
import axios from "axios";
import "../css/LoginPage.css"

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token) {
          window.location.href = "http://localhost:5173/logout";
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
        const res = await axios.post("http://localhost:5000/api/login", { email, password });
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
        <img src="src/assets/images/archival_bg.jpg" alt="" className="login-page-background"/>
        <div className="login-page-background-gradient"></div>
        <div className="bubble-container">
            <div className="bubble">
                <div className="login-section">
                    <div className="logo">
                        <a href="http://localhost:5173/"><img src="src/assets/images/website logo inverted.png" alt="WebsiteLogo" /></a>
                    </div>
                    <a href="http://localhost:5173/"><h3>FUTURE-ED</h3></a>
                    <h1>Login to Your Account</h1>
                    <p>Login using social networks</p>
                    <div className="social-icons">
                        <img src="src/assets/images/icons/google-icon.png" alt="" />
                        <img src="src/assets/images/icons/facebook-icon.png" alt="" />
                        <img src="src/assets/images/icons/instagram-icon.png" alt="" />
                </div>
                <div className="divider">
                    <span>OR</span>
                </div>
                <form id="login-form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" className="login-btn">Sign In</button>
                </form>
                    <div>{message}</div>
                </div>
                <div className="signup-section-login">
                    <h2>New Here?</h2>
                    <p>Sign up and discover new opportunities!</p>
                    <button className="signup-btn" onClick={() => window.location.href = "http://localhost:5173/signup"}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>

  );
}

export default LoginPage;
