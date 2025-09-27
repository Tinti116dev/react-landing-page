import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Demo from "./pages/Demo";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <Router>
      {/* Navbar appears ONCE here */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      {/* Footer appears ONCE here */}
      <Footer />
    </Router>
  );
}

export default App;
