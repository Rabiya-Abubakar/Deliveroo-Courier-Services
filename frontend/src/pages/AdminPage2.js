import React from 'react';
import '../assets/styles/admin-page2.css'; // Ensure the CSS file is correctly placed

const AdminPage2 = () => {
  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className='admin2-body'>      
      <div className="admin2-container">
        <h1>Order Summary</h1>

        <div className="order-segment">
          <div className="order-header">
            <p><strong>Order Number:</strong> #123456</p>
          </div>

          <div className="row">
            <p><strong>Origin:</strong> Nairobi</p>
            <p><strong>Destination:</strong> Mombasa</p>
          </div>

          <div className="row">
            <p><strong>Distance Travelled:</strong> 500 km</p>
          </div>

          <div className="bundle">
            <h3>Customer Information</h3>
            <p><strong>Name:</strong> Daniel Ombui</p>
            <p><strong>Email:</strong> danielombui@moringaschool.com</p>
            <p><strong>Phone No.:</strong> +254712345678</p>
          </div>

          <div className="bundle">
            <h3>Payment Information</h3>
            <p><strong>Amount to Pay:</strong> KES 2900</p>
            <p><strong>Payment Status:</strong> Paid</p>
            <p><strong>Amount Paid:</strong> KES 2900</p>
          </div>

          <button className="download-btn" onClick={downloadPDF}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage2;
