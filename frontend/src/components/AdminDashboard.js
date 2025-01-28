import React, { useState, useEffect } from 'react';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    // Fetch all parcels for the admin
    fetch('/api/parcels')
      .then((response) => response.json())
      .then((data) => setParcels(data))
      .catch((error) => console.error('Error fetching parcels:', error));
  }, []);

  const updateParcel = (id, updates) => {
    // Send updates to the backend
    fetch(`/api/parcels/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    })
      .then((response) => response.json())
      .then((updatedParcel) => {
        setParcels((prev) =>
          prev.map((parcel) => (parcel.id === id ? updatedParcel : parcel))
        );
      })
      .catch((error) => console.error('Error updating parcel:', error));
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <table className="parcels-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel) => (
            <tr key={parcel.id}>
              <td>{parcel.id}</td>
              <td>{parcel.sender}</td>
              <td>{parcel.recipient}</td>
              <td>{parcel.status}</td>
              <td>
                <button
                  onClick={() => updateParcel(parcel.id, { status: 'Delivered' })}
                >
                  Mark as Delivered
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
