import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Navbar from "./pages/navbar.jsx";
import About from "./pages/about.jsx";
import Footer from "./pages/footer.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Careers from "./pages/careers.jsx";
import Contact from "./pages/contactUs.jsx";
import ProjectDetail from "./components/portfolio/pdfView.jsx";
import Services from "./pages/services.jsx";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
