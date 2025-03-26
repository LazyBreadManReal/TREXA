import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/HomePage.css";

function HomePage() {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        window.location.href = `http://localhost:5173/notes/${search}`;
    };
  return (
    <div className="home-page">
        <div className="header">
            <div className="header-upper-section">
                <img src="src/assets/images/backgrounds/background.jpg" alt="" className="background"/>
                <div className="bg-gradient"></div>
                <div className="left-upper-header">
                    <p>HOME</p>
                    <div className="logo">
                        <h1>TREXA</h1>
                        <h3>Where Fashion Meets Fierce.</h3>
                    </div>
                </div>
                <div className="right-upper-header">
                    <div className="upper-navbar">
                        <a href="">CONTACT</a>
                        <a href="http://localhost:5173/Login">ACCOUNT</a>
                        <a href=""><img src="src/assets/images/icons/cart.png" alt="" />VIEW CART</a>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <img src="src/assets/images/icons/search.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="left-navbar">
                    <a href="">CATEGORIES v</a>
                </div>
                <div className="right-navbar">
                    <a href="#">MEN'S</a>
                    <a href="#">WOMEN'S</a>
                    <a href="#">SWIMWEAR</a>
                    <a href="#">BAGS</a>
                    <a href="#">JEWELRIES</a>
                    <a href="#">SHOES</a>
                    <a href="#">HEELS</a>
                </div>
            </div>
        </div>
        <div className="main-content-section">
            <div className="top-trends-section">
                <div className="trends-title">
                    <h1>TOP TRENDS</h1>
                </div>
                <div className="top-trends-cards">
                    <div className="nav-arrow">{"<"}</div>
                    <div className="card1 card">
                        <img src="src/assets/images/trends/1.jpg" alt="" />
                    </div>
                    <div className="card2 card">
                        <img src="src/assets/images/trends/2.jpg" alt="" />
                    </div>
                    <div className="card3 card">
                        <img src="src/assets/images/trends/6.jpg" alt="" className="top" />
                        <img src="src/assets/images/trends/4.jpg" alt="" className="bottom" />
                    </div>
                    <div className="card4 card">
                        <img src="src/assets/images/trends/5.jpg" alt="" className="top" />
                        <img src="src/assets/images/trends/3.jpg" alt="" className="bottom" />
                    </div>
                    <div className="nav-arrow">{">"}</div>
                </div>
            </div>
            <div className="category-section">
                <div className="category-list">
                    <div className="category-item">
                        <img src="src/assets/images/categories/dress.jpg" alt="Dress" />
                        <p>DRESS</p>
                    </div>
                    <div className="category-item">
                        <img src="src/assets/images/categories/pants.jpg" alt="Pants" />
                        <p>PANTS</p>
                    </div>
                    <div className="category-item">
                        <img src="src/assets/images/categories/swimsuit.jpg" alt="Swimsuit" />
                        <p>SWIMSUIT</p>
                    </div>
                    <div className="category-item">
                        <img src="src/assets/images/categories/makeup.jpg" alt="Make Up" />
                        <p>MAKE UP</p>
                    </div>
                    <div className="category-item">
                        <img src="src/assets/images/categories/workout.jpg" alt="Work Out" />
                        <p>WORK OUT</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
