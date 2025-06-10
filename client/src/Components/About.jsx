
import { useNavigate } from 'react-router-dom';

const About = () => {
  const router=useNavigate();
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Welcome to FoodRender</h1>
          <p className="hero-subtitle">Render Food into your tummy , Like React did</p>
          <button className="order-cta" onClick={()=>router('/')}>Order Now</button>
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

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to experience food magic?</h2>
        <button className="cta-button" onClick={()=>router('/')}>Explore Restaurants</button>
      </section>
    </div>
  );
};

export default About;