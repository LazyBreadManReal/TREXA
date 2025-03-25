import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
        <img src="src/assets/images/backgrounds/full-bg.png" alt="" className="background" />
        <div className="section">
            <div className="navbar">
                <div className="navbar-left-section">
                    <a href="">
                        <img src="src/assets/images/icons/menu.png" alt="Menu" className="menu-img"/>
                        <span>MENU</span>
                    </a>
                    <a href="">
                        <img src="src/assets/images/icons/search.png" alt="Explore Notes" className="search-img"/>
                        <span>EXPLORE NOTES</span>
                    </a>
                    <a href="">
                        UPLOAD
                    </a>
                </div>
                <div className="navbar-right-section">
                    <a href="">
                        MY NOTES (0)
                    </a>
                    <a href="">
                        PROFILE
                    </a>
                    <a href="">
                        SIGN IN
                    </a>
                </div>
            </div>
            <div className="website-title">
                <h1>Noteify</h1>
                <p>Your Notes, Your Knowledge</p>
            </div>
        </div>
        <div className="section sec2">
            <div className="welcome-message-container">
                <div className="welcome-message">
                    <h1>Welcome To Noteify</h1>
                    <p>A smart platform for sharing and discovering notes, tailored to your learning needs.</p>
                </div>
            </div>
        </div>
        <div className="section sec3">
            <div className="search-bar">
                <input type="text" placeholder="I AM LOOKING FOR..." />
                <button>BROWSE</button>
            </div>
            <div className="upload-container">
                <div className="upload-box">
                    <button className="upload-button">
                        <span>⬆ Upload Files</span>
                    </button>
                    <p>or Drop files here</p>
                </div>
                <p className="upload-message">
                    Start by searching for or uploading your notes. It's that simple!
                </p>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
