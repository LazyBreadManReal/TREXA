import { useState, useEffect } from "react";
import axios from "axios";
import "../css/LoginPage.css";

function LogoutPage() {
  const [name, setName] = useState("");

  useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        console.error("No token found, redirecting to login...");
        window.location.href = "http://localhost:5173/login";
        return;
      }
  
      axios
        .get("http://localhost:5000/api/protected", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log("User data:", res.data);
          setName(res.data.user.name);
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
        });
      }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "http://localhost:5173/login"; // Redirect to login page
    };

    return (
        <div className="login-page">
            <img src="src/assets/images/archival_bg.jpg" alt="" className="login-page-background"/>
            <div className="login-page-background-gradient"></div>
            <div className="bubble-container">
                <div className="bubble">
                    <div className="login-section">
                        <h1>Hello, {name}!</h1>
                        <p>You are logged in.</p>
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogoutPage;
