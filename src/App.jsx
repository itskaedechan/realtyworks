import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import RealEstateOverview from "./components/RealEstateOverview";
import Badges from "./components/Badges";
import PhotoGallery from "./components/PhotoGallery";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <RealEstateOverview />
        <Badges />
        <PhotoGallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
