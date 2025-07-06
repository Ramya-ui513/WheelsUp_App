// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser, SignOutButton } from '@clerk/clerk-react';
import './Navbar.css';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  // Handle logout logic
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/images/Logo.jpg" alt="Logo" className="logo-img" />
        WheelsUp
      </Link>

      <div className="nav-links">
        <Link to="/categories">Categories</Link>
        <Link to="/store">Store Location</Link>
        <Link to="/help">Help</Link>

        {isSignedIn ? (
          <>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>

            {/* Correct way to attach callback in Clerk */}
            <SignOutButton>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </SignOutButton>
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
