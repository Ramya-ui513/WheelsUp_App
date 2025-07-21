import React, { useEffect, useState } from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import checkoutBg from '../assets/CheckOut.JPG';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const username = localStorage.getItem('username');

  useEffect(() => {
    if (!username) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const cartRes = await fetch(`http://localhost:8000/api/cart/items?username=${username}`);
        const cartData = await cartRes.json();
        if (cartRes.ok) setCartItems(cartData);

        // 2. Get Address
        const addrRes = await fetch(`http://localhost:8000/api/address?username=${username}`);
        const addrData = await addrRes.json();
        if (addrRes.ok) setAddress(addrData.address_text);
      } catch (err) {
        console.error("Error fetching cart/address:", err);
      }
    };

    fetchData();
  }, [username, navigate]);

  const total = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  const handlePlaceOrder = async () => {
    try {
      const clearRes = await fetch(`http://localhost:8000/api/cart/clear?username=${username}`, {
        method: "DELETE",
      });

      if (clearRes.ok) {
        setShowConfetti(true);
        setTimeout(() => {
          navigate('/order-success', {
            state: {
              username,
              cartItems,
              total,
              address,
            },
          });
        }, 2000);
      } else {
        alert("Failed to clear cart");
      }
    } catch (err) {
      console.error("Error clearing cart:", err);
    }
  };

  return (
    <div
      className="checkout-container"
      style={{
        backgroundImage: `url(${checkoutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        color: '#fff',
      }}
    >
      {showConfetti && <Confetti />}
      <h2>Checkout</h2>
      <p>User: {username}</p>

      <div className="checkout-section">
        <h4>Delivery Address:</h4>
        <p>{address || "No address found"}</p>
      </div>

      <div className="checkout-section">
        <h4>Order Summary:</h4>
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              {item.name || item.product_name} — €{item.price}
            </li>
          ))}
        </ul>
        <strong>Total: €{total.toFixed(2)}</strong>
      </div>

      <div className="checkout-section">
        <label>Payment Method:</label>
        <select>
          <option>Credit Card</option>
          <option>UPI</option>
          <option>Cash on Delivery</option>
        </select>
      </div>

      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
