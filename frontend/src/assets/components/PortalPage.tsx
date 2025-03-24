import { useState, useEffect } from "react";
import "../css/PortalPage.css"

function portal() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="portal-page">
        <img src="src/assets/images/archival_bg.jpg" alt="" className="portal-page-background"/>
        <div className="portal-page-background-gradient"></div>
        <div className="bubble-container">
            <div className="bubble">
                <div className="login-section">
                    <div className="logo">
                        <img src="src/assets/images/website logo inverted.png" alt="School Logo" />
                    </div>
                    <h3>FUTURE-ED</h3>
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
                <form id="login-form">
                    <input type="email" placeholder="Email" id="email" required="" />
                    <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    required=""
                    />
                    <button type="submit" className="login-btn">
                    Sign In
                    </button>
                </form>
                </div>
                <div className="signup-section">
                <h2>New Here?</h2>
                <p>Sign up and discover a great amount of new opportunities!</p>
                <button className="signup-btn">Sign Up</button>
                </div>
            </div>
        </div>
    </div>

  );
}

export default portal;
