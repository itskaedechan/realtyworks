import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import RealEstateOverview from "./components/RealEstateOverview";
import Badges from "./components/Badges";
import PhotoGallery from "./components/PhotoGallery";
import Services from "./components/Services";
import DreamHome from "./components/DreamHome";
import CallorVisit from "./components/CallorVisit";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <RealEstateOverview />
        <DreamHome />
        <Badges />
        <PhotoGallery />
        <Services />
        <CallorVisit />
        <Footer />
      </div>
    </>
  );
}

export default App;
