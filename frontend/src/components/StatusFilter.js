import React from 'react';
import "./StatusFilter.css";

const StatusFilter = ({ setStatusFilter }) => {
  return (
    <div className="status-filter">
      <button onClick={() => setStatusFilter("all")} className="all">All</button>
      <button onClick={() => setStatusFilter("delivered")} className="delivered">Delivered</button>
      <button onClick={() => setStatusFilter("pending")} className="pending">Pending</button>
      <button onClick={() => setStatusFilter("canceled")} className="canceled">Canceled</button>
    </div>
  );
};

export default StatusFilter;
