
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import './OrderSuccess.css';
import orderBg from '../assets/OrderSucess.jpg'; 

const OrderSuccessPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { userEmail, cartItems = [], total = 0, address = '' } = state || {};

  const generateInvoicePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('🧾 Order Invoice', 20, 20);

    doc.setFontSize(12);
    doc.text(`Customer: ${userEmail}`, 20, 35);
    doc.text(`Delivery Address: ${address}`, 20, 45);

    let y = 60;
    cartItems.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.product_name} - €${item.price}`, 20, y);
      y += 10;
    });

    doc.text(`Total: €${total.toFixed(2)}`, 20, y + 10);
    return doc;
  };

  const handleEmailInvoice = async () => {
  try {
    const itemList = cartItems.map(
      (item) => `<li>${item.product_name} - €${item.price}</li>`
    ).join('');

    const html = `
      <h2>🧾 Order Invoice</h2>
      <p><strong>Username:</strong> ${userEmail}</p>
      <p><strong>Address:</strong> ${address}</p>
      <ul>${itemList}</ul>
      <p><strong>Total:</strong> €${total.toFixed(2)}</p>
    `;

    console.log("📤 Sending Email with:", {
      username: userEmail,
      subject: 'Your Order Invoice - WheelsUp',
      html
    });

    const res = await fetch('https://wheelsup-app.onrender.com/api/email/send-invoice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userEmail,
        subject: 'Your Order Invoice - WheelsUp',
        html
      })
    });

    const data = await res.json();
    console.log("Email API response:", data);

    if (res.ok) {
      alert('Invoice emailed successfully!');
    } else {
      alert(`Failed to send email. ${data.message || ''}`);
    }
  } catch (err) {
    console.error(" Email error:", err);
    alert('Failed to send email.');
  }
};


  return (
    <div
      className="order-success-container"
      style={{
        backgroundImage: `url(${orderBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        color: '#fff'
      }}
    >
      <h2>Order Placed Successfully!</h2>
      <p>Thank you, <strong>{userEmail}</strong>, for shopping with us.</p>

      <div className="order-summary">
        <h4>Ordered Items:</h4>
        <ul>
          {cartItems.map((item, i) => (
            <li key={i}>{item.product_name} — €{item.price}</li>
          ))}
        </ul>
        <p><strong>Delivery Address:</strong> {address}</p>
        <p><strong>Total Paid:</strong> €{total.toFixed(2)}</p>
      </div>

      <button className="invoice-btn" onClick={() => generateInvoicePDF().save('invoice.pdf')}>
        Download Invoice
      </button>

      <button className="invoice-btn" onClick={handleEmailInvoice}>
        Email Invoice
      </button>

      <button className="back-home-btn" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default OrderSuccessPage;
