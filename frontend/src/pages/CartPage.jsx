import React, { useEffect, useState } from 'react';
import './Cart.css';
import cartBackground from '../assets/cart.jpg';
import { useNavigate } from 'react-router-dom';
import { getCartItems, removeCartItem, saveAddress } from '../utils/cartService';

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [addressText, setAddressText] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);

  const username = localStorage.getItem('username');

  useEffect(() => {
    if (!username) {
      navigate('/login');
    } else {
      loadCartItems();
    }
  }, [username]);

  const loadCartItems = async () => {
    try {
      const items = await getCartItems(username);
      setCartItems(items);
    } catch (err) {
      console.error('Failed to fetch cart items:', err);
    }
  };

  const handleRemove = async (itemId) => {
    const success = await removeCartItem(itemId);
    if (success) {
      setCartItems((prev) => prev.filter((item) => item._id !== itemId));
    } else {
      alert('Failed to remove item from cart');
    }
  };

  const handleSaveAddress = async () => {
    if (!addressText.trim()) {
      alert('⚠️ Address is required!');
      return;
    }

    const saved = await saveAddress(username, addressText.trim());
    if (saved) {
      alert('Address saved!');
      setShowCheckout(true);
    } else {
      alert('Failed to save address');
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <div
      className="cart-container"
      style={{
        backgroundImage: `url(${cartBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        color: '#fff',
      }}
    >
      <h2>{username ? `${username}'s` : 'Your'} Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item._id} className="cart-item">
                <img src={item.image} alt={item.name || item.product_name} />
                <div>
                  <h4>{item.name || item.product_name}</h4>
                  <p>Price: €{item.price}</p>
                  <button className="remove-btn" onClick={() => handleRemove(item._id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <strong>Total: €{totalPrice.toFixed(2)}</strong>
          </div>

          <div className="address-section">
            <h3> Delivery Address</h3>
            <textarea
              placeholder="Enter your delivery address"
              value={addressText}
              onChange={(e) => setAddressText(e.target.value)}
            />
            <button onClick={handleSaveAddress}>Save Address</button>
          </div>

          {showCheckout && (
            <div className="checkout-section">
              <button className="checkout-btn" onClick={() => navigate('/checkout')}>
                Proceed to Checkout
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;
