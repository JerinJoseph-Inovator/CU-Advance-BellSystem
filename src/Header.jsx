import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Header.css'; // Assuming this CSS is in the same directory
import Logo from "./Logo.png";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [dropdown, setDropdown] = useState(false); // State for dropdown visibility
  const navigate = useNavigate(); // Hook for navigation

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    // Logic for logout (e.g., clearing auth token)
    setIsLoggedIn(false); // Update the login state in the parent component
    alert("You have successfully logged out!");

    // Redirect to the login page (root page)
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Menu Button */}
        <div className="submit-container">
          <button onClick={toggleDropdown} className="submit-button">
            Menu
          </button>
          {dropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/midsem">Midsem</Link></li>
              <li><Link to="/endsem">Endsem</Link></li>
              <li><Link to="/holiday">Holiday</Link></li>
              <li><Link to="/emergency">Emergency</Link></li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <span className="logo-container">
          <img src={Logo} alt="Christ University" className="logo" />
        </span>

        {/* Logout Button (Only visible when logged in) */}
        <div className="logout-container">
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="logout-button"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
