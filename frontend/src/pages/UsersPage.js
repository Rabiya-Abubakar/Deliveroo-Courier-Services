import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../utils/api'; // Assuming API functions are set up
import { ROLES, STATUS_CODES } from '../utils/constants';
import '../assets/styles/userpage.css'; // Make sure you have the corresponding CSS

const fetchUserDetails = async (userId) => {
    return fetchData(`/api/users/${userId}`);
  };
  
const fetchOrders = async (userId) => {
    return fetchData(`/api/orders/user/${userId}`);};

const UserPage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user details on mount
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserDetails(); // Assuming a function that fetches user data
        setUserDetails(userData);
        const userOrders = await fetchOrders(userData.id); // Assuming orders are fetched with user ID
        setOrders(userOrders);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  // Navigate to order tracking page
  const handleTrackOrder = (orderId) => {
    navigate(`/track-order/${orderId}`);
  };

  // Log out function
  const handleLogout = () => {
    // Clear user session, cookies, or token
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userDetails) {
    return <div>User details not found.</div>;
  }

  return (
    <div className="user-page">
      <header className="user-header">
        <h1>Welcome, {userDetails.name}!</h1>
        <button className="logout-btn" onClick={handleLogout}>Log Out</button>
      </header>

      <section className="user-info">
        <h2>Your Information</h2>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Role:</strong> {ROLES[userDetails.role]}</p>
      </section>

      <section className="order-history">
        <h2>Your Orders</h2>
        {orders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          <div className="order-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Status:</strong> {STATUS_CODES[order.status]}</p>
                <button className="track-btn" onClick={() => handleTrackOrder(order.id)}>
                  Track Order
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="update-details">
        <h2>Update Your Details</h2>
        <button className="update-btn" onClick={() => navigate('/update-profile')}>
          Update Profile
        </button>
      </section>
    </div>
  );
};

export default UserPage;
