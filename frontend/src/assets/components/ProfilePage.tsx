import { useState, useEffect } from "react";
import axios from "axios";
import "../css/ProfilePage.css";

function ProfilePage() {
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
      <div className="profile-page">
        <img src="src/assets/images/backgrounds/background.jpg" alt="" className="profile-background" />
        <div className="bg-gradient"></div>
        <div className="profile-section">
          <a href="http://localhost:5173/"className="page-logo">TREXA</a>
          <h1>Hello, {name}!</h1>
          <p>You are logged in.</p>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    </div>
    );
}

export default ProfilePage;
