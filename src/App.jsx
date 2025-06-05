import React from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Works from "./components/Works.jsx";
import Feedbacks from "./components/Feedbacks.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="reative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Card />
        <About />
        {/* <Experience /> */}
        <Works />
        {/* <Feedbacks /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
