import React from 'react';
import '../styles/FAQs.css';

const FAQs = () => {
  return (
    <div className="faqs-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h3>How do I track my parcel?</h3>
        <p>You can track your parcel using the tracking number provided at the time of booking.</p>
      </div>
      <div className="faq-item">
        <h3>Can I change the delivery address?</h3>
        <p>Yes, you can update the delivery address before the parcel is out for delivery.</p>
      </div>
      <div className="faq-item">
        <h3>What are your delivery hours?</h3>
        <p>We deliver parcels between 8 AM and 8 PM, Monday to Saturday.</p>
      </div>
    </div>
  );
};

export default FAQs;
