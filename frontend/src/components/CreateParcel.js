import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Deliveroo</h1>
      <p>Fast and reliable parcel delivery service at your fingertips.</p>
      <div className="cta-buttons">
        <a href="/create-parcel" className="btn">Create Parcel</a>
        <a href="/login" className="btn btn-secondary">Login</a>
      </div>
    </div>
  );
};

export default Home;
