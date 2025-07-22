import React, { useState, useEffect } from 'react';
import './AddAddress.css';
import axios from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const AddAddress = () => {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    if (!username) {
      alert("⚠️ Please log in first.");
      navigate('/login');
    }
  }, [username, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address.trim()) return alert('⚠️ Please enter your address.');

    console.log("Saving:", {
      username,
      address_text: address,
    });

    try {
      await axios.post('address/', {
        username,
        address_text: address,
      });
      alert('Address saved successfully!');
      navigate('/cart');
    } catch (err) {
      console.error(' Error saving address:', err);
      alert('Failed to save address.');
    }
  };

  return (
    <div className="add-address-container">
      <h2>Add Your Delivery Address</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your full address here..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={5}
        />
        <button type="submit">Save Address</button>
      </form>
    </div>
  );
};

export default AddAddress;
