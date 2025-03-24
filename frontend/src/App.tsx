import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./assets/components/HomePage";
import PortalPage from "./assets/components/PortalPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portal" element={<PortalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
