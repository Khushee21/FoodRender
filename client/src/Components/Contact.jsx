import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "", phone: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <div className="hero-overlay">
          <h1>Hungry for Help? We're Here!</h1>
          <p>Questions, feedback, or special requests? Our team is ready to serve you.</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="icon-wrapper">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Our Kitchen</h3>
            <p>123 Food Street, Neemuch, MP 458441</p>
          </div>

          <div className="info-card">
            <div className="icon-wrapper">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Our Chefs</h3>
            <p>+91 98765 43210 (Delivery)</p>
            <p>+91 12345 67890 (Support)</p>
          </div>

          <div className="info-card">
            <div className="icon-wrapper">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p>orders@foodrender.com</p>
            <p>feedback@foodrender.com</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2><i className="fas fa-utensils"></i> Send Your Message</h2>
          {isSubmitted && (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <p>Thank you! We'll get back to you soon.</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name"><i className="fas fa-user"></i> Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email"><i className="fas fa-envelope"></i> Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone"><i className="fas fa-mobile-alt"></i> Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message"><i className="fas fa-comment-alt"></i> Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we make your food experience better?"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;