import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/userpage.css" // Import styles

const UserPage = () => {
  return (
    <div className="user-container">
      <h1>Welcome to Deliveroo</h1>
      <p>Start your journey with fast and easy delivery.</p>

      <div className="icon-container">
        <div className="icon-slot">
          <Link to="/create-order">
            <div className="slot">
              <p>Create Order</p>
            </div>
          </Link>
        </div>

        <div className="icon-slot">
          <Link to="/update-order">
            <div className="slot">
              <p>Update Order</p>
            </div>
          </Link>
        </div>

        <div className="icon-slot">
          <Link to="/cancel-order">
            <div className="slot">
              <p>Cancel Order</p>
            </div>
          </Link>
        </div>

        <div className="icon-slot">
          <Link to="/delivery-details">
            <div className="slot">
              <p>Delivery Details</p>
            </div>
          </Link>
        </div>

        <div className="icon-slot">
          <Link to="/track-order">
            <div className="slot">
              <p>Track My Order</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
