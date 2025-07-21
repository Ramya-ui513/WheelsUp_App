import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-content">
        <h2>Help & Support</h2>
        <p>Welcome to WheelsUp Support! Here's how we can assist you:</p>

        <div className="help-section">
          <h3>Account Help</h3>
          <ul>
            <li>Forgot password? Click on "Reset Password" in Login screen.</li>
            <li>Need to change email or favorite car? Visit your Profile page.</li>
          </ul>
        </div>

        <div className="help-section">
          <h3>Order & Delivery</h3>
          <ul>
            <li>Orders ship within 3–5 business days.</li>
            <li>Delivery updates are sent via email and can be tracked in Profile.</li>
          </ul>
        </div>

        <div className="help-section">
          <h3>Returns & Refunds</h3>
          <ul>
            <li>Returns accepted within 14 days of delivery.</li>
            <li>Refunds are processed back to your payment method in 5–7 days.</li>
          </ul>
        </div>

        <div className="help-section">
          <h3>Contact Us</h3>
          <p>
            Email: <a href="mailto:support@wheelsup.com">support@wheelsup.com</a><br />
            Phone: +353-87-478-6869<br />
            Hours: Mon–Fri, 10AM to 6PM IST
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
