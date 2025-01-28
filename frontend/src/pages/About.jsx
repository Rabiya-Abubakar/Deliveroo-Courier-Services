import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div className="pink-navbar">
        <h1 className="navbar-title">DeliverOO</h1>
      </div>

      <main>
        <section className="about-us">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>DeliverOO</strong>! We're your go-to solution for fast,
            reliable, and hassle-free deliveries. At DeliverOO, we believe the world moves
            faster than ever, and your deliveries should too.
          </p>

          <h2>Our Story</h2>
          <p>
            Founded in 2023, DeliverOO was born from a simple yet powerful idea: to
            connect people, businesses, and communities with seamless logistics solutions.
            What started as a local delivery service quickly grew into a trusted partner
            for individuals and companies across the country.
          </p>

          <h2>Our Mission</h2>
          <p>
            To redefine delivery services with precision, speed, and transparency, ensuring
            smiles travel with every parcel. Whether it's a surprise gift, a vital
            document, or a last-minute errand, we make it happen with flair and finesse.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Speed:</strong> Lightning-fast delivery solutions.</li>
            <li><strong>Reliability:</strong> Your package is in safe hands.</li>
            <li><strong>Transparency:</strong> Real-time tracking for peace of mind.</li>
            <li><strong>Innovation:</strong> Simplify your delivery experience.</li>
            <li><strong>Community:</strong> We’re part of your journey.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            Want to know more or have specific delivery needs? Reach out to us! Our
            friendly support team is here to assist you 24/7.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2025 DeliverOO. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
