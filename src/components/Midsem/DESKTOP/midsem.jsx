import React from 'react';
import './midsem.css';

function Midsem() {
  return (
    <div className="container">
      

      <div className="slots-wrapper">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="slot-card">
            <h2 className="slot-title">SLOT {index + 1}</h2>
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
        ))}
      </div>
    </div>
  );
}

export default Midsem;

