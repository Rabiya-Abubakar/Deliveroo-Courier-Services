import React, { useState } from 'react';
import '../assets/styles/delivery-details.css'; // Make sure to place your CSS file in the correct location

const DeliveryDetails = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const orders = [
    {
      orderNumber: '#123456',
      status: 'delivered',
      origin: 'Nairobi',
      destination: 'Mombasa',
      description: 'Electronics - Fragile',
      weight: '1200 grams',
      size: '30cm x 20cm x 15cm',
    },
    {
      orderNumber: '#4563456',
      status: 'delivered',
      origin: 'Kisumu',
      destination: 'Mombasa',
      description: 'Medicine - Fragile',
      weight: '1400 grams',
      size: '33cm x 25cm x 18cm',
    },
    {
      orderNumber: '#234567',
      status: 'pending',
      origin: 'Kisumu',
      destination: 'Eldoret',
      description: 'Books and Documents',
      weight: '1500 grams',
      size: '40cm x 30cm x 10cm',
    },
    {
      orderNumber: '#345678',
      status: 'canceled',
      origin: 'Nakuru',
      destination: 'Naivasha',
      description: 'Perishable Food Items',
      weight: '500 grams',
      size: '20cm x 15cm x 10cm',
    },
    {
      orderNumber: '#456789',
      status: 'pending',
      origin: 'Malindi',
      destination: 'Kilifi',
      description: 'Clothing and Accessories',
      weight: '800 grams',
      size: '25cm x 20cm x 10cm',
    },
    {
      orderNumber: '#567890',
      status: 'delivered',
      origin: 'Thika',
      destination: 'Machakos',
      description: 'Furniture - Assembled',
      weight: '5000 grams',
      size: '100cm x 50cm x 40cm',
    },
    {
      orderNumber: '#678901',
      status: 'pending',
      origin: 'Nairobi',
      destination: 'Kisii',
      description: 'Medical Supplies',
      weight: '2000 grams',
      size: '35cm x 25cm x 20cm',
    },
    {
      orderNumber: '#789012',
      status: 'canceled',
      origin: 'Kakamega',
      destination: 'Bungoma',
      description: 'Sports Equipment',
      weight: '3000 grams',
      size: '60cm x 40cm x 30cm',
    },
  ];

  const filteredOrders = filterStatus === 'all' ? orders : orders.filter(order => order.status === filterStatus);

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  return (
    <div className='delivery-body'>
      <div className="container">
        <h1>Delivery Details</h1>

        <div className="filter-buttons">
          <button className="btn all-btn" onClick={() => handleFilter('all')}>All</button>
          <button className="btn delivered-btn" onClick={() => handleFilter('delivered')}>Delivered</button>
          <button className="btn pending-btn" onClick={() => handleFilter('pending')}>Pending</button>
          <button className="btn canceled-btn" onClick={() => handleFilter('canceled')}>Canceled</button>
        </div>

        <div id="order-list" className="order-list">
          {filteredOrders.map((order, index) => (
            <div key={index} className="order-segment" data-status={order.status}>
              <p><strong>Order Number:</strong> {order.orderNumber}</p>
              <p><strong>Status:</strong> <span className={`status ${order.status}`}>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></p>
              <p><strong>Parcel Origin:</strong> {order.origin} (Google Pin: <a href="Gandhi Ave, Nairobi">-1.2921,36.8219</a>)</p>
              <p><strong>Parcel Destination:</strong> {order.destination} (Google Pin: <a href="VX26+PW7 Ruiru Business Centre, Ruiru">-4.0435,39.6682</a>)</p>
              <p><strong>Parcel Description:</strong> {order.description}</p>
              <p><strong>Parcel Weight:</strong> {order.weight}</p>
              <p><strong>Parcel Size:</strong> {order.size}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
