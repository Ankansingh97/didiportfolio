import React, { useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Kitchen Cabinet Plan",
      category: "furniture",
      image: "/images/FP-K-50-CP-W-1.75.pdf",
      description: "Kitchen cabinet design layout",
    },
    {
      id: 2,
      title: " MASTER BEDROOM MAIN WARDROBE",
      category: "furniture",
      image: "/images/FP-MBW-02-FW-MA-2.4.pdf",
      description: "Master bedroom main wardrobe design",
    },

    {
      id: 4,
      title: "Kids Room - Loomcraft",
      category: "residential",
      image: "/images/KIDS ROOM _LOOMCRAFT_22072022.pdf",
      description: "Kids room interior design project",
    },
    {
      id: 5,
      title: "Loomcraft Kids Display",
      category: "commercial",
      image: "/images/LOOM CRAFT_KIDS DISPLAY_16072022.pdf",
      description: "Commercial display design",
    },
    {
      id: 6,
      title: "Other Furniture",
      category: "furniture",
      image: "/images/OTHER FURNITURE_26052022.pdf",
      description: "Furniture collection portfolio",
    },
    {
      id: 7,
      title: "Divine Consultant",
      category: "commercial",
      image: "/images/R0_DIVINE _CONSULTANT_29062022.pdf",
      description: "Commercial consultation project",
    },
    {
      id: 8,
      title: "Wardrobe Design",
      category: "furniture",
      image: "/images/R0_WARDROBE_21042023-Model.pdf",
      description: "Custom wardrobe design",
    },
    {
      id: 9,
      title: "Kurukshetra - MEPL",
      category: "commercial",
      image: "/images/R2_KURUKSHETRA_MEPL_27062022.pdf",
      description: "Commercial space design",
    },
    {
      id: 10,
      title: "Kolkata MEPL - Second Floor",
      category: "commercial",
      image: "/images/R5_KOLKATA MEPL_SECOND FLOOR_11072022.pdf",
      description: "Multi-floor commercial design",
    },
  ];

  const categories = [{ id: "all", label: "All Projects" }];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore a curated selection of my recent interior design projects,
            showcasing creativity, functionality, and attention to detail.
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                if (project.image.endsWith(".pdf")) {
                  window.open(project.image, "_blank");
                } else {
                  setSelectedImage(project);
                }
              }}
            >
              <div className="portfolio-image">
                {project.image.endsWith(".pdf") ? (
                  <div className="pdf-placeholder">
                    <div className="pdf-icon">📄</div>
                    <p>PDF Document</p>
                  </div>
                ) : (
                  <img src={project.image} alt={project.title} />
                )}
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="view-more">
                      {project.image.endsWith(".pdf")
                        ? "Open PDF →"
                        : "View Details →"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <span className="category-tag">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <span className="category-badge">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
