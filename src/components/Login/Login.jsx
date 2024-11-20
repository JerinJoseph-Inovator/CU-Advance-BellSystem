import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Please fill in all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(() => {
        // Successful login
        setIsLoggedIn(true); // Update login status
        setValues({ email: "", pass: "" }); // Clear form fields
        setSubmitButtonDisabled(false);
        navigate("/home"); // Redirect to home
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        // Handle different errors more specifically
        if (err.code === "auth/wrong-password") {
          setErrorMsg("Incorrect password. Please try again.");
        } else if (err.code === "auth/user-not-found") {
          setErrorMsg("No user found with this email.");
        } else {
          setErrorMsg("An error occurred. Please try again later.");
        }
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmission();
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/home"); 
  };
  

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">LOGIN</h1>
          <h2 className="login-subtitle">DeciBell Management System</h2>

          <form>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              onKeyDown={handleKeyPress}
            />

            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={values.pass}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
              onKeyDown={handleKeyPress}
            />

            {errorMsg && <p className="error">{errorMsg}</p>}

            <button
              type="button"
              className="loginButton"
              onClick={handleSubmission}
              disabled={submitButtonDisabled}
            >
              {submitButtonDisabled ? "Logging in..." : "LOGIN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
