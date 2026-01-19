import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Creating Spaces That Tell Your Story
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm <strong>Rani Yadav</strong>, a passionate interior
              designer with over 3 years of experience transforming ordinary
              spaces into extraordinary environments.
            </p>

            <p>
              My journey in interior design began with a deep fascination for
              how spaces influence our daily lives. I believe that great design
              is not just about aesthetics—it's about creating functional,
              comfortable, and inspiring environments that reflect your
              personality and enhance your lifestyle.
            </p>

            <p>
              Specializing in both residential and commercial projects, I've had
              the privilege of working with diverse clients across India. From
              contemporary homes to sophisticated commercial spaces, my approach
              combines modern design principles with timeless elegance.
            </p>

            <div className="experience-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <div className="highlight-content">
                  <h4>Education</h4>
                  <p>Bachelor of Technology (B.Tech) in Civil Engineering</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">💼</div>
                <div className="highlight-content">
                  <h4>Experience</h4>
                  <p>3+ Years in Residential & Commercial Design</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">⭐</div>
                <div className="highlight-content">
                  <h4>Expertise</h4>
                  <p>3D Modeling, Space Planning, Custom Furniture</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3>Core Competencies</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">🏠</div>
                <h4>Space Planning</h4>
                <p>Optimizing layouts for functionality and flow</p>
              </div>

              <div className="skill-card">
                <div className="skill-icon">🎨</div>
                <h4>Color Theory</h4>
                <p>Creating harmonious palettes that evoke emotion</p>
              </div>

              <div className="skill-card">
                <div className="skill-icon">💻</div>
                <h4>3D Visualization</h4>
                <p>Bringing concepts to life with detailed renders</p>
              </div>

              <div className="skill-card">
                <div className="skill-icon">🛋️</div>
                <h4>Custom Furniture</h4>
                <p>Designing bespoke pieces for unique spaces</p>
              </div>

              <div className="skill-card">
                <div className="skill-icon">📐</div>
                <h4>Technical Drawing</h4>
                <p>Precise plans and detailed specifications</p>
              </div>

              <div className="skill-card">
                <div className="skill-icon">🤝</div>
                <h4>Client Relations</h4>
                <p>Collaborative approach from concept to completion</p>
              </div>
            </div>

            <div className="software-skills">
              <h4>Design Tools</h4>
              <div className="software-tags">
                <span>AutoCAD</span>
                <span>SketchUp</span>
                <span>3ds Max</span>
                <span>V-Ray</span>
                <span>Photoshop</span>
                <span>Illustrator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
