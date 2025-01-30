import React from 'react';
import "./OrderCard.css";

const OrderCard = ({ orderNumber, status, origin, destination, description, weight, size }) => {
  return (
    <div className={`order-card ${status.toLowerCase()}`}>
      <h3>Order Number: {orderNumber}</h3>
      <p className="status">Status: <span>{status}</span></p>
      <p>Origin: {origin}</p>
      <p>Destination: {destination}</p>
      <p>Description: {description}</p>
      <p>Weight: {weight}g</p>
      <p>Size: {size}cm</p>
    </div>
  );
};

export default OrderCard;
