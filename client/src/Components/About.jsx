import React from "react";
import User from "./User";
import UserClass from "./UserClass";


const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Welcome to FoodRender</h1>
          <p className="hero-subtitle">Render Food into your tummy , Like React did</p>
          <button className="order-cta">Order Now</button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Food Philosophy</h2>
          <p>
            At FoodRender, we believe great food should be accessible to everyone, anytime. 
            We connect food lovers with the best local restaurants, bringing culinary 
            excellence right to your doorstep.
          </p>
          <div className="mission-stats">
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Restaurant Partners</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">30min</span>
              <span className="stat-label">Avg. Delivery Time</span>
            </div>
          </div>
        </div>
        <div className="mission-image">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" 
            alt="Delicious food assortment" 
            className="food-image"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title">Meet Our Food Heroes</h2>
        <p className="section-subtitle">The passionate team behind your delicious deliveries</p>
        
        <div className="team-grid">
          <User 
            name="Khushi Patel" 
            role="Delivery Coordinator" 
            bio="Ensures your food arrives hot and on time"
            imgSrc="https://randomuser.me/api/portraits/women/44.jpg"
            contact="@khushi"
          />
          <UserClass 
            name="Raj Sharma" 
            role="Head Chef & Quality Control" 
            location="Neemuch"
            bio="With 10+ years culinary experience, tasting every dish before it goes out"
            imgSrc="https://randomuser.me/api/portraits/men/32.jpg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to experience food magic?</h2>
        <button className="cta-button">Explore Restaurants</button>
      </section>
    </div>
  );
};

export default About;