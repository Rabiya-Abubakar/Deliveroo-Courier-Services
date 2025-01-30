import React from 'react';
import "./TrackingBar.css";

const TrackingBar = ({ progress }) => {
  return (
    <div className="tracking-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
      <div className="bike-icon">🏍️</div>
    </div>
  );
};

export default TrackingBar;