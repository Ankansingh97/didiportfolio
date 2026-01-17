import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Create Something Beautiful</h2>
          <p className="section-description">
            Ready to transform your space? I'd love to hear about your project
            and discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h4>Email</h4>
              <a href="mailto:rani.designer@example.com">yrani244@gmail.com</a>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h4>Phone</h4>
              <a href="tel:+919876543210">+91 8808501243</a>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectType">Project Type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Interior</option>
                  <option value="furniture">Custom Furniture</option>
                  <option value="renovation">Complete Renovation</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell Me About Your Project *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Describe your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={submitted}>
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </button>

              {submitted && (
                <p className="success-message">
                  Thank you for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Rani Yadav Interior Design. All
            rights reserved.
          </p>
          <p className="footer-tagline">
            Crafting spaces with passion and precision
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
