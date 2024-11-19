import React from 'react';
import './Login.css'; // Import this for any additional custom styling

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">LOGIN</h1>
        <h2 className="login-subtitle">DeciBell Management System</h2>
        <form>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" placeholder="Enter your password" />
          <button type="submit" className="loginButton">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;