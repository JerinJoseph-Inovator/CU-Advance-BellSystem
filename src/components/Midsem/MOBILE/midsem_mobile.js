import React from 'react';
import './midsem.css';

function App() {
  return (
    <div className="container">

      <div className="slots-wrapper">
        <div className="slot-card">
          <h2 className="slot-title">SLOT 1</h2>
          <label className="input-label">
            Start:
            <input type="date" className="input-date" />
          </label>
          <label className="input-label">
            End:
            <input type="date" className="input-date" />
          </label>
          <label className="input-label">
            Time:
            <input type="time" className="input-time" />
          </label>
          <button className="slot-submit-button">SUBMIT</button>
        </div>
      </div>

      <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default App;