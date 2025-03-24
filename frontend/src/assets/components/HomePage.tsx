import { useState, useEffect } from "react";
import "../css/HomePage.css"

function HomePage() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
        <div className="upper_page">
            <div className="header">
            <div className="left-header">
                <nav>
                <ul>
                    <li>
                    <a href="#">Home</a>
                    </li>
                    <li>
                    <a href="#">Archives</a>
                    </li>
                </ul>
                </nav>
            </div>
            <div className="center-header">
                <img src="src/assets/images/website logo.png" alt="website_logo" />
            </div>
            <div className="right-header">
                <nav>
                <ul>
                    <li>
                    <a href="#">About</a>
                    </li>
                    <li>
                    <a href="http://localhost:5173/portal">Account</a>
                    </li>
                </ul>
                </nav>
            </div>
            </div>
            <div className="bg_image">
            <img src="src/assets/images/archival_bg.jpg" />
            <div className="image-gradient" />
            </div>
            <div className="website_name">
            <div className="search-bar-section">
                <div className="search-bar">
                <img
                    src="src/assets/images/magnifying-glass-white.png"
                    alt="magnifying glass"
                />
                s
                </div>
            </div>
            <div className="web_title">
                <h1>FUTURE-ED</h1>
            </div>
            <div className="web_subtitle">
                <h1>ARCHIVE</h1>
            </div>
            </div>
            <div className="category-selection">
            <div className="category-background">
                <div className="description-box">
                <div className="category-description">
                    <p>Discover the mysteries of the universe</p>
                </div>
                <div className="category-see-all">
                    <button className="category-see-all-button">See All</button>
                </div>
                </div>
                <div className="category-image-section">
                <div className="image-carousel-section">
                    <div className="image-carousel">
                    <img
                        src="src/assets/images/carousel/left-arrow-white.png"
                        alt="left-arrow"
                    />
                    <img
                        src="src/assets/images/carousel/unticked-circle-white.png"
                        alt="unticked-circle"
                    />
                    <img
                        src="src/assets/images/carousel/ticked-circle-white.png"
                        alt="ticked-circle"
                    />
                    <img
                        src="src/assets/images/carousel/unticked-circle-white.png"
                        alt="unticked-circle"
                    />
                    <img
                        src="src/assets/images/carousel/right-arrow-white.png"
                        alt="right-arrow"
                    />
                    </div>
                </div>
                <div className="category-image-gradient" />
                <img
                    src="src/assets/images/categories/space.jpg"
                    alt="space category"
                    className="category-image"
                />
                </div>
            </div>
            </div>
        </div>
        <div className="lower_page">
            <div className="content">
            <div className="courses-section">
                <div className="courses">
                <div className="courses-content">
                    <img
                    src="src/assets/images/graduation-cap-black.png"
                    alt="graduation cap"
                    />
                    <div className="courses-text">
                    <h1>Wide array of online courses</h1>
                    <p>
                        Enjoy the various online courses available, covering topics from
                        technology and business to arts and personal development. Learn
                        at your own pace with expert instructors and interactive
                        lessons.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="authors-section">
                <div className="authors">
                <div className="authors-content">
                    <div className="authors-text">
                    <h1>Various Authors</h1>
                    <p>
                        Explore a diverse collection of courses created by experts,
                        educators, and industry professionals. Learn from different
                        perspectives and gain valuable insights from authors across
                        various fields.
                    </p>
                    </div>
                    <img
                    src="src/assets/images/authors-logo-black.png"
                    alt="authors logo"
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="top-books-section">
            <div className="top-books-title">
                <h1>Top Books Of The Month</h1>
            </div>
            <div className="top-books-selector-section">
                <div className="top-books-selector-content">
                <img
                    className="top-books-selector-arrow"
                    src="src/assets/images/left-arrow-inverted.png"
                    alt="left-arrow"
                />
                <div className="books-content">
                    <img src="src/assets/images/books/placeholder.jpg" alt="placeholder" />
                    <button>Preview</button>
                </div>
                <div className="books-content">
                    <img src="src/assets/images/books/placeholder.jpg" alt="placeholder" />
                    <button>Preview</button>
                </div>
                <div className="books-content">
                    <img src="src/assets/images/books/placeholder.jpg" alt="placeholder" />
                    <button>Preview</button>
                </div>
                <div className="books-content">
                    <img src="src/assets/images/books/placeholder.jpg" alt="placeholder" />
                    <button>Preview</button>
                </div>
                <div className="books-content">
                    <img src="src/assets/images/books/placeholder.jpg" alt="placeholder" />
                    <button>Preview</button>
                </div>
                <img
                    className="top-books-selector-arrow"
                    src="src/assets/images/right-arrow-inverted.png"
                    alt="right-arrow"
                />
                </div>
            </div>
            </div>
            <div className="footer">
            <div className="footer-section">
                <nav>
                <h1>Discover</h1>
                <ul>
                    <li>
                    <a href="#">Home</a>
                    </li>
                    <li>
                    <a href="#">Books</a>
                    </li>
                    <li>
                    <a href="#">Authors</a>
                    </li>
                    <li>
                    <a href="#">Subjects</a>
                    </li>
                    <li>
                    <a href="#">Collections</a>
                    </li>
                    <li>
                    <a href="#">Advanced Search</a>
                    </li>
                </ul>
                </nav>
            </div>
            <div className="footer-section">
                <nav>
                <h1>Help</h1>
                <ul>
                    <li>
                    <a href="#">Help Center</a>
                    </li>
                    <li>
                    <a href="#">Contact Us</a>
                    </li>
                    <li>
                    <a href="#">Suggesting Edits</a>
                    </li>
                    <li>
                    <a href="#">Add a Book</a>
                    </li>
                    <li>
                    <a href="#">Release Notes</a>
                    </li>
                </ul>
                </nav>
            </div>
            <div className="footer-section">
                <nav>
                <h1>Legal</h1>
                <ul>
                    <li>
                    <a href="#">Terms of service</a>
                    </li>
                    <li>
                    <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                    <a href="#">Cookie Policy</a>
                    </li>
                    <li>
                    <a href="#">Disclaimer</a>
                    </li>
                    <li>
                    <a href="#">DMCA Policy</a>
                    </li>
                </ul>
                </nav>
            </div>
            <div className="footer-logo">
                <img src="src/assets/images/website logo inverted.png" alt="website_logo" />
                <div className="footer-logo-text">
                <div className="footer-logo-title">
                    <h1>FUTURE-ED</h1>
                </div>
                <div className="footer-logo-subtitle">
                    <h2>ARCHIVE</h2>
                </div>
                </div>
            </div>
            </div>
            <div className="footer-logo-messege">
            <p>© 2025 Future-ED. All rights reserved.</p>
            </div>
        </div>
        </>

  );
}

export default HomePage;
