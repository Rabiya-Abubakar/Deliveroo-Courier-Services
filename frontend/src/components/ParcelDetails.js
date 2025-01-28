import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ParcelDetails.css';

const ParcelDetails = () => {
  const { id } = useParams();
  const [parcel, setParcel] = useState(null);

  useEffect(() => {
    // Fetch parcel details using the ID
    fetch(`/api/parcels/${id}`)
      .then((response) => response.json())
      .then((data) => setParcel(data))
      .catch((error) => console.error('Error fetching parcel details:', error));
  }, [id]);

  if (!parcel) {
    return <div className="loading">Loading parcel details...</div>;
  }

  return (
    <div className="parcel-details-container">
      <h2>Parcel Details</h2>
      <div className="details">
        <p><strong>Sender:</strong> {parcel.sender}</p>
        <p><strong>Recipient:</strong> {parcel.recipient}</p>
        <p><strong>Weight:</strong> {parcel.weight} kg</p>
        <p><strong>Pickup Location:</strong> {parcel.pickupLocation}</p>
        <p><strong>Destination:</strong> {parcel.destination}</p>
        <p><strong>Status:</strong> {parcel.status}</p>
      </div>
    </div>
  );
};

export default ParcelDetails;
