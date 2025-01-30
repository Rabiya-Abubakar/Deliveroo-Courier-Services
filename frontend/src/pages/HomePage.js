import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <nav className="navbar">
      </nav>

      <header className="hero">
        <h2>"Swift, Secure, and Reliable – Your Parcel, Our Priority!"</h2>
        <p>DeliverOO ensures fast and safe parcel delivery at your convenience.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </header>

      <section className="testimonials">
        <h3>"What Our Customers Say"</h3>
        <div className="testimonial">
          <p>"DeliverOO changed the way I send packages! Fast and efficient service every time."</p>
          <span>- Alex Johnson</span>
        </div>
        <div className="testimonial">
          <p>"The best courier service I’ve ever used! My parcels always arrive on time."</p>
          <span>- Sarah Williams</span>
        </div>
      </section>

      <footer className="footer">
        <ul className="footer-links">
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/sitemap">Sitemap</Link></li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
        </ul>
        <div className="email-signup">
          <input type="email" placeholder="Enter your email" />
          <button>Sign Up</button>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
