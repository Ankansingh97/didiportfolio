import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => scrollToSection("home")}>
          <span className="logo-text">Rani Yadav</span>
          <span className="logo-subtitle">Interior Designer</span>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => scrollToSection("home")}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => scrollToSection("portfolio")}>Portfolio</a>
          </li>
          <li>
            <a href="#services" onClick={() => scrollToSection("services")}>Services</a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => scrollToSection("contact")}
              className="contact-btn"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
