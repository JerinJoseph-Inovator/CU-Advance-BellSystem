import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router for navigation
import './Header.css'; // Assuming this CSS is in the same directory
import Logo from "./Logo.png";

function Header() {
  const [dropdown, setDropdown] = useState(false); // State for dropdown visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    // Logic for logout (e.g., clearing auth token)
    setIsLoggedIn(false);
    alert("You have successfully logged out!");
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Submit Button */}
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

        {/* Christ Logo */}
        <div className="logo-container">
          <img src={Logo} alt="Christ University" className="logo" />
        </div>

         {/* Logout Button */}
         <div>
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
      </div>
    </header>
  );
}

export default Header;
