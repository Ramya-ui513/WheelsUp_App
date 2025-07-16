import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("access_token");
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-section">
        <img src="/images/Logo.jpg" alt="Logo" className="logo-img" />
        <span className="brand">WheelsUp</span>
      </Link>

      <div className="nav-links">
        <Link to="/categories">Categories</Link>
        <Link to="/store">Store Location</Link>
        <Link to="/help">Help</Link>

        {username ? (
          <>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
