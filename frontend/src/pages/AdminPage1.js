import React, { useState } from 'react';
import '../assets/styles/admin-page1.css'; // Ensure the CSS file is correctly placed


const AdminPage1 = () => {      
  const [status, setStatus] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [transitLocation, setTransitLocation] = useState('');
  const [isConfirmDisabled, setIsConfirmDisabled] = useState(true);

  // Check if all fields are filled and enable the Confirm button
  const checkFormValidity = () => {
    const allFieldsFilled = status && origin && destination && transitLocation;
    setIsConfirmDisabled(!allFieldsFilled);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    checkFormValidity();
  };

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
    checkFormValidity();
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
    checkFormValidity();
  };

  const handleTransitLocationChange = (e) => {
    setTransitLocation(e.target.value);
    checkFormValidity();
  };

  const handleConfirmClick = () => {
    // Logic to navigate to the next page, simulating a redirect
    window.location.href = '/admin-page2'; // Assuming you're using a routing system like React Router
  };

  return (
    <div>
  <div className='admin1-body'>
      <div className="admin1-container">
        <h1>Order Details</h1>
        
        <div className="order-segment">
          <div className="order-header">
            <p><strong>Order Number:</strong> #12345</p>
          </div>

          <div className="input-group">
            <label htmlFor="status">Change Status:</label>
            <select id="status" value={status} onChange={handleStatusChange} required>
              <option value="">--Select Status--</option>
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div className="row">
            <div className="input-group">
              <label htmlFor="origin"><strong>Parcel Origin:</strong></label>
              <input
                type="text"
                id="origin"
                placeholder="Enter Google Pin Location"
                value={origin}
                onChange={handleOriginChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="destination"><strong>Parcel Destination:</strong></label>
              <input
                type="text"
                id="destination"
                placeholder="Enter Google Pin Location"
                value={destination}
                onChange={handleDestinationChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <p><strong>Parcel Weight:</strong> 5kg</p>
            <p><strong>Parcel Size:</strong> 30cm x 20cm x 10cm</p>
          </div>

          <div className="input-group">
            <label htmlFor="transit-location">Transit Location:</label>
            <input
              type="text"
              id="transit-location"
              placeholder="Enter Google Pin Location"
              value={transitLocation}
              onChange={handleTransitLocationChange}
              required
            />
          </div>

          <div className="actions">
            <button className="cancel-btn" onClick={() => window.history.back()}>
              Cancel
            </button>
            <button
              className="confirm-btn"
              disabled={isConfirmDisabled}
              onClick={handleConfirmClick}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminPage1;
