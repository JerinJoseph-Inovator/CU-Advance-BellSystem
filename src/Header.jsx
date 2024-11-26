import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo.png";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdown((prevDropdown) => !prevDropdown);
  };

  const handleOptionClick = () => {
    setDropdown(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("You have successfully logged out!");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Menu Hamburger Button */}
        <div className="submit-container">
          <button onClick={toggleDropdown} className="submit-button">
            <span className="hamburger-icon">&#9776;</span>
          </button>
          {dropdown && (
            <ul className="dropdown-menu">
              <li onClick={handleOptionClick}>
                <Link to="/home">HOME</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/display">DISPLAY</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/schedule">SCHEDULE</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/midsem">MIDSEM</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/endsem">ENDSEM</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/holiday">HOLIDAY</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/emergency">EMERGENCY</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <img src={Logo} alt="Christ University" className="logo-direct" />

        {/* Logout Button */}
        <div className="logout-container">
          {isLoggedIn && (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
