import React, { useState } from 'react';
import '../assets/styles/create-order.css'; // Ensure the CSS file is correctly placed

const CreateOrder = () => {
  const [orderData, setOrderData] = useState({
    origin: '',
    destination: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send it to an API or handle it accordingly)
    alert('Order created successfully!');
    setOrderData({
      origin: '',
      destination: '',
      description: '',
    });
  };

  return (
    <div>
      <nav className="navbar">
        <p className="head"><strong>DeliverOO</strong></p>
      </nav>
      <div className="container">
        <h1>Create Order</h1>
        <p>Fill in the form below to create an order.</p>
        <form className="create-order-form" onSubmit={handleSubmit}>
          <label htmlFor="origin">Parcel Origin (Enter Google Pin Location):</label>
          <input
            type="text"
            id="origin"
            name="origin"
            placeholder="Enter parcel origin"
            value={orderData.origin}
            onChange={handleChange}
            required
          />

          <label htmlFor="destination">Parcel Destination (Enter Google Pin Location):</label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Enter parcel destination"
            value={orderData.destination}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Parcel Description:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Enter parcel description"
            value={orderData.description}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn submit-btn">Submit</button>
        </form>
        <a href="index.html" className="btn back-btn">Back to Home</a>
      </div>
    </div>
  );
};

export default CreateOrder;
