import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className={`hero-content ${isVisible ? "visible" : ""}`}>
        <div className="hero-text">
          <span className="hero-greeting">Welcome to</span>
          <h1 className="hero-title">
            <span className="highlight">Rani Yadav</span>
            <span className="subtitle">Interior Design Studio</span>
          </h1>
          <p className="hero-description">
            Transforming spaces into timeless masterpieces. With over 5 years of
            experience in residential and commercial interior design, I create
            environments that blend functionality with aesthetic excellence.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToPortfolio}>
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-decoration"></div>
          <div className="floating-card card-1">
            <span>🏡</span>
            <p>Residential</p>
          </div>
          <div className="floating-card card-2">
            <span>🏢</span>
            <p>Commercial</p>
          </div>
          <div className="floating-card card-3">
            <span>🎨</span>
            <p>Custom Design</p>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

export default Hero;
