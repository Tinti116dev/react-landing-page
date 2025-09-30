import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieModal from "./components/CookieModal";

import Home from "./pages/Home";
import Features from "./pages/Features";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Demo from "./pages/Demo";
import FAQs from "./pages/FAQs";

function App() {
  const [showCookieModal, setShowCookieModal] = useState(false);

  const handleOpenCookieModal = () => {
    setShowCookieModal(true);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      {/* Pass down the modal open function */}
      <Footer onOpenCookieModal={handleOpenCookieModal} />
      {/* Control modal visibility */}
      <CookieModal
        showModal={showCookieModal}
        setShowModal={setShowCookieModal}
      />
    </Router>
  );
}

export default App;
