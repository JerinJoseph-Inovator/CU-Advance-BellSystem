import React from "react";
import { Link } from "react-router-dom";
import { FaQuestionCircle, FaInfoCircle } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/help" className="footer-icon">
          <FaQuestionCircle size={24} />
        </Link>
        <Link to="/about" className="footer-icon">
          <FaInfoCircle size={24} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
