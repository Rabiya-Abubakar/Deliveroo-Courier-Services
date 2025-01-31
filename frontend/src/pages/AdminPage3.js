import React, { useState } from 'react';
import '../assets/styles/admin-page3.css'; // Make sure to adjust the path as necessary


const AdminPage3 = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState('pending');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Logic for updating the order in the backend goes here (e.g., API call)
    console.log({
      orderNumber,
      orderStatus,
      origin,
      destination,
      description,
    });

    alert(`Order ${orderNumber} has been updated successfully!`);
  };

  const handleCancelOrder = () => {
    // Logic to handle cancel order functionality, like sending a cancel request
    alert(`Order ${orderNumber} has been canceled.`);
  };

  return (
    <div className="admin-container">
      <h1>Edit Delivery Details</h1>
      <p>Modify the details of the order as needed.</p>

      <form className="edit-order-form" onSubmit={handleSubmit}>
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
          <button type="button" className="btn cancel-btn" onClick={handleCancelOrder}>
            Cancel Order
          </button>
          <button type="submit" className="btn confirm-btn">
            Confirm Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage3;
