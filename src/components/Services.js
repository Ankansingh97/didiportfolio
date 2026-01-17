import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: "🏡",
      title: "Residential Design",
      description:
        "Transform your home into a personalized sanctuary with custom designs that reflect your lifestyle and taste.",
      features: [
        "Space Planning",
        "Color Consultation",
        "Furniture Selection",
        "Lighting Design",
      ],
    },
    {
      icon: "🏢",
      title: "Commercial Interiors",
      description:
        "Create inspiring workspaces that boost productivity and leave lasting impressions on clients and employees.",
      features: [
        "Office Design",
        "Retail Spaces",
        "Hospitality",
        "Brand Integration",
      ],
    },
    {
      icon: "🛋️",
      title: "Custom Furniture",
      description:
        "Bespoke furniture pieces designed to perfectly fit your space and complement your interior aesthetic.",
      features: [
        "Wardrobes",
        "Modular Kitchen",
        "Storage Solutions",
        "Unique Pieces",
      ],
    },
    {
      icon: "💻",
      title: "3D Visualization",
      description:
        "See your space come to life before construction begins with photorealistic 3D renders and walkthroughs.",
      features: [
        "3D Modeling",
        "Virtual Tours",
        "Material Samples",
        "Detailed Renders",
      ],
    },
    {
      icon: "📐",
      title: "Space Planning",
      description:
        "Optimize your layout for maximum functionality and flow with expert spatial analysis and planning.",
      features: ["Layout Design", "Traffic Flow", "Zoning", "Measurements"],
    },
    {
      icon: "🎨",
      title: "Complete Renovation",
      description:
        "End-to-end renovation services from concept to completion, managing every detail of your project.",
      features: [
        "Project Management",
        "Contractor Coordination",
        "Budget Planning",
        "Quality Control",
      ],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-tag">Services</span>
          <h2 className="section-title">What I Offer</h2>
          <p className="section-description">
            Comprehensive interior design services tailored to bring your vision
            to life, from initial concept to final installation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h3 className="process-title">My Design Process</h3>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Consultation</h4>
              <p>
                Initial meeting to understand your vision, requirements, and
                budget
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Concept Design</h4>
              <p>
                Creating mood boards, layouts, and 3D visualizations of your
                space
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Development</h4>
              <p>
                Refining designs, selecting materials, and finalizing details
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Execution</h4>
              <p>
                Managing installation and ensuring quality throughout the
                project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
