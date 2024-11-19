import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed

import './Emergency.css'; // Import plain CSS

function Emergency() {
  const [isSending, setIsSending] = useState(false); // Loading state for button
  const [password, setPassword] = useState(''); // State for password input
  const [isConfirmed, setIsConfirmed] = useState(false); // State for password confirmation

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsConfirmed(value === 'EMERGENCY'); // Check if password matches
  };

  const handleClick = async () => {
    setIsSending(true); // Set loading state

    try {
      const data = { Mode: 5 }; // JSON data to send
      const response = await axios.post('https://192.168.241.160:443/emergency', data); // Replace with your Raspberry Pi details

      if (response.status === 200) {
        console.log('Emergency signal sent successfully!');
        alert('Emergency signal sent successfully!');
      } else {
        console.error('Error sending emergency signal:', response.statusText);
        alert('Error sending emergency signal. Please try again.');
      }
    } catch (error) {
      console.error('Error sending emergency signal:', error);
      alert('Error sending emergency signal. Please try again.');
    } finally {
      setIsSending(false); // Reset loading state
    }
  };

  return (
    <div className="emergencyMain">
      <div className="passwordContainer">
        <label htmlFor="passwordInput" className="passwordLabel">
          Enter Confirmation Password:
        </label>
        <input
          type="text"
          id="passwordInput"
          value={password}
          onChange={handlePasswordChange}
          className="passwordInput"
          placeholder="Type 'EMERGENCY' to enable the button"
        />
      </div>
      <span className="buttonEmergency">
        <button
          disabled={!isConfirmed || isSending} // Button enabled only if password matches and not sending
          onClick={handleClick}
          className="buttonEmergencyIN"
        >
          {isSending ? 'Sending Emergency Signal...' : 'Emergency Bell'}
        </button>
      </span>
    </div>
  );
}

export default Emergency;
