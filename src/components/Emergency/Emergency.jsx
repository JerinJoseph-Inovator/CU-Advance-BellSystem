import React, { useState } from 'react';
import axios from 'axios'; 
import './Emergency.css'; 

function Emergency() {
  const [isSending, setIsSending] = useState(false); 
  const [password, setPassword] = useState(''); 
  const [isConfirmed, setIsConfirmed] = useState(false); 

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsConfirmed(value === 'EMERGENCY'); 
  };

  const handleClick = async () => {
    setIsSending(true); 

    try {
      const data = { Mode: 5 }; 
      const response = await axios.post('https://192.168.241.160:443/emergency', data); 

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
      setIsSending(false); 
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
          disabled={!isConfirmed || isSending} 
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
