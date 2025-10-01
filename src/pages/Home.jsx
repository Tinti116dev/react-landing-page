import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import TrustProof from "../components/TrustProof";
import Advantage from "../components/Advantage";
import Services from "../components/Services";
import Footer from "../components/Footer";
import bgImage from "../assets/images/img00001.jpg";

function Home() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WhyChooseUs />
        <TrustProof />
        <Advantage />
        <Services />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
