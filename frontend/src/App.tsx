import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./assets/components/HomePage";
import LoginPage from "./assets/components/LoginPage";
import SignupPage from "./assets/components/SignupPage";
import LogoutPage from "./assets/components/LogoutPage";
import ContentUploadPage from "./assets/components/ContentUploadPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload" element={<ContentUploadPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
