// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieModal from "./components/CookieModal";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Demo from "./pages/Demo";
import FAQs from "./pages/FAQs";
import Contacts from "./pages/Contacts";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [showCookieModal, setShowCookieModal] = useState(false);

  const handleOpenCookieModal = () => {
    setShowCookieModal(true);
  };

  return (
    <Router>
      <Navbar />
      <div className="pt-16">{/* offset for fixed navbar */} 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
      
      {/* Footer with cookie modal trigger */}
      <Footer onOpenCookieModal={handleOpenCookieModal} />

      {/* Cookie Modal */}
      <CookieModal
        isOpen={showCookieModal}
        onClose={() => setShowCookieModal(false)}
      />

      {/* Scroll To Top Button */}
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
