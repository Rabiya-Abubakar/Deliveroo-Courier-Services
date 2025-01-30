import React, { useState } from 'react';
import '../assets/styles/update-order.css'; // Make sure the path is correct for your CSS

const UpdateOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState('pending');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Logic for confirming order updates can go here, like an API call or redirect
    console.log({
      orderNumber,
      orderStatus,
      origin,
      destination,
      description,
    });
  };

  const handleCancelOrder = () => {
    // Logic to handle cancel order functionality, like sending a cancel request
    alert(`Order ${orderNumber} has been canceled.`);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <p>DeliverOO</p>
      </nav>
      <h1>Update Your Order</h1>
      <p>Fill in the form below to create/update your order.</p>

      <form className="update-order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="order-number">
            <strong>Order Number:</strong>
          </label>
          <input
            type="text"
            id="order-number"
            name="order-number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
          />
          <button
            type="button"
            className="btn cancel-btn"
            onClick={handleCancelOrder}
          >
            Cancel Order
          </button>
        </div>

        <div className="status">
          <label htmlFor="order-status">
            <strong>Order Status:</strong>
          </label>
          <select
            id="order-status"
            name="order-status"
            value={orderStatus}
            onChange={(e) => setOrderStatus(e.target.value)}
            required
          >
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="canceled">Canceled</option>
          </select>
          <p className="admin-link">
            * Order status is updated by Admin. Visit the{' '}
            <a href="admin-page1.html">Admin Page</a>.
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="origin">Parcel Origin (Enter Google Pin Location):</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="destination">Parcel Destination (Enter Google Pin Location):</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Parcel Description:</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="button-container">
          <a href="index.html" className="btn cancel-btn">
            Cancel
          </a>
          <button type="submit" className="btn confirm-btn">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateOrder;
