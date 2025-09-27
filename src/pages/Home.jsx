import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import TrustProof from "../components/TrustProof";
import Advantage from "../components/Advantage";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Trust & Proof */}
      <TrustProof />

      {/* Our Advantage */}
      <Advantage />

      {/* Services */}
      <Services />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
