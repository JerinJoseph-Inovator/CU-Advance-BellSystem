import React, { useState } from "react";
import "./App.css"; // Add necessary styles here or inline

function App() {
  const [date, setDate] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Selected Date: ${date}`);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img
            src="https://example.com/logo.png" // Replace with actual logo URL
            alt="University logo" // Improved alt text
            style={styles.logo}
          />
          <div>
            <h1 style={styles.title}>CHRIST (Deemed to be University)</h1>
            <p style={styles.subtitle}>Bangalore, India</p>
          </div>
        </div>
        <button
          style={styles.logoutButton}
          aria-label="Logout"
          onClick={() => alert("Logout button clicked")}
        >
          ⤴️
        </button>
      </header>

      <main style={styles.card}>
        <h2 style={styles.selectDate}>SELECT DATE</h2>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          style={styles.dateInput}
          aria-label="Date input"
        />
        <button onClick={handleSubmit} style={styles.submitButton}>
          SUBMIT
        </button>
      </main>

      <div style={styles.pagination}>
        <span style={{ ...styles.dot, backgroundColor: "black" }}></span>
        <span style={styles.dot}></span>
        <span style={styles.dot}></span>
      </div>
    </div>
  );
}

export default App;