import React, { useState } from 'react';
import '../assets/styles/track-order.css'; // Ensure the CSS is in the correct path

const TrackOrder = () => {
  const [parcelNumber, setParcelNumber] = useState('');

  const handleInputChange = (event) => {
    setParcelNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parcelNumber) {
      // You can handle the tracking logic here, such as redirecting or fetching order details
      window.location.href = `/order-details`;
    } else {
      alert('Please enter a valid parcel number');
    }
  };

  return (<div className='track-body'>
    <div className="track-container">
      <h1>Track Your Order</h1>
      <p className="instructions">
        We've got you covered. Enter your delivery number and we'll track its location.
      </p>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="parcel-number" className="label-bold">
          Enter Your Parcel Number:
        </label>
        <input
          type="text"
          id="parcel-number"
          name="parcel-number"
          placeholder="Enter parcel number..."
          value={parcelNumber}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn track-btn">
          Track Order
        </button>
      </form>
    </div>
    </div>
  );
};

export default TrackOrder;
