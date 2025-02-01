import React, { useState } from 'react';
import '../assets/styles/tracking-order.css'; // Ensure the CSS is in the correct path


const OrderDetails = () => {
  const [filter, setFilter] = useState('all');

  const filterSegments = (status) => {
    setFilter(status);
  };

  const orderData = [
    {
      orderNumber: '123456',
      route: 'Nairobi to Mombasa',
      status: 'enroute',
      distanceCovered: '300km',
      totalDistance: '500km',
      estimatedTime: '5hrs',
      timeCovered: '3hrs',
      timeRemaining: '2hrs',
    },

    {
      orderNumber: '16735',
      route: 'Nairobi to Kisii',
      status: 'enroute',
      distanceCovered: '400km',
      totalDistance: '500km',
      estimatedTime: '6hrs',
      timeCovered: '3hrs',
      timeRemaining: '3hrs',
    },

    {
      orderNumber: '1236786',
      route: 'Kisumu to Mombasa',
      status: 'delivered',
      distanceCovered: '1000km',
      totalDistance: '1000km',
      estimatedTime: '10hrs',
      timeCovered: '10hrs',
      timeRemaining: '10hrs',
    },

    {
      orderNumber: '69873445',
      route: 'Eldoret to Kapsabet',
      status: 'canceled',
      distanceCovered: '0',
      totalDistance: '500km',
      estimatedTime: '0hrs',
      timeCovered: '0hrs',
      timeRemaining: '0hrs',
    },

    {
      orderNumber: '686538',
      route: 'Lamu to Wajir',
      status: 'enroute',
      distanceCovered: '400km',
      totalDistance: '780km',
      estimatedTime: '7hrs',
      timeCovered: '3hrs',
      timeRemaining: '4hrs',
    },

    {
      orderNumber: '12332456',
      route: 'Syokimau to Kajiado',
      status: 'enroute',
      distanceCovered: '250km',
      totalDistance: '560km',
      estimatedTime: '4hrs',
      timeCovered: '3hrs',
      timeRemaining: '1hrs',
    },

    {
      orderNumber: '4523456',
      route: 'Nakuru to Busia',
      status: 'canceled',
      distanceCovered: '0km',
      totalDistance: '0km',
      estimatedTime: '0hrs',
      timeCovered: '0hrs',
      timeRemaining: '0hrs',
    }
    // More orders can be added here
  ];

  return (
    <div>
    <div className="tracking-container">  
      <h1>Order Tracking</h1>

      <div className="filter-buttons">
        <button
          className="btn all-btn"
          onClick={() => filterSegments('all')}
        >
          All
        </button>
        <button
          className="btn enroute-btn"
          onClick={() => filterSegments('enroute')}
        >
          Enroute
        </button>
        <button
          className="btn delivered-btn"
          onClick={() => filterSegments('delivered')}
        >
          Delivered
        </button>
        <button
          className="btn canceled-btn"
          onClick={() => filterSegments('canceled')}
        >
          Canceled
        </button>
      </div>

      <div id="order-list" className="order-list">
        {orderData
          .filter((order) => filter === 'all' || order.status === filter)
          .map((order, index) => (
            <div
              key={index}
              className="order-segment"
              data-status={order.status}
            >
              <div className="order-header">
                <p><strong>Order Number:</strong> #{order.orderNumber}</p>
                <p className={`status ${order.status}`}>{order.status}</p>
              </div>
              <p><strong>Route:</strong> {order.route}</p>
              <div className="bike-icon">🚴</div>
              <div className="tracking-bar">
                <span className="bar-label left">Origin</span>
                <div className="bar">
                  <div className="progress" style={{ width: '60%' }}></div>
                </div>
                <span className="bar-label right">Destination</span>
                <div className="distance-info">
                  <p className="distance">Distance Covered: {order.distanceCovered}</p>
                  <p className="total-distance">
                    Total Distance: {order.totalDistance} (Estimated Time: {order.estimatedTime})
                  </p>
                </div>
              </div>
              <div className="map-container">
                <iframe
                  title="Order Tracking Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.940964247897!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMS4yOTIxLDMyLjgyMTkgTiAzNi44MjE5IEU!5e0!3m2!1sen!2ske!4v1690314578847!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="time-info">
                <p className="time-covered">Time Covered: {order.timeCovered}</p>
                <p className="time-remaining">Time Remaining: {order.timeRemaining}</p>
              </div>
            </div>
          ))}
      </div>

      <button className="close-btn" onClick={() => window.location.href = '/track-order'}>
        Close
      </button>
    </div>
    </div>
  );
};

export default OrderDetails;
