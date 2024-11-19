// App.js

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./holiday.css";

function Holiday() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [holidays, setHolidays] = useState([]);

  const addHoliday = (date) => {
    setHolidays([...holidays, date.toLocaleDateString("en-GB")]);
  };

  const removeHoliday = (date) => {
    setHolidays(holidays.filter((d) => d !== date));
  };

  return (
    <div className="container">
     
      <div className="content">
        <div className="card">
          <h2>SELECT DATE</h2>
          <label>Select:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd-MM-yyyy"
            className="date-input"
          />
          <button className="submit-btn" onClick={() => selectedDate && addHoliday(selectedDate)}>SUBMIT</button>
        </div>

        <div className="card">
          <h2>SELECT RANGE</h2>
          <label>Start:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd-MM-yyyy"
            className="date-input"
          />
          <label>End:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="dd-MM-yyyy"
            className="date-input"
          />
          <button className="submit-btn" onClick={() => startDate && endDate && addHoliday(`${startDate.toLocaleDateString("en-GB")} - ${endDate.toLocaleDateString("en-GB")}`)}>SUBMIT</button>
        </div>

        <div className="card">
          <h2>ADDED HOLIDAYS</h2>
          <ul className="holiday-list">
            {holidays.map((holiday, index) => (
              <li key={index} className="holiday-item">
                {holiday}
                <span className="remove-button" onClick={() => removeHoliday(holiday)}>
                  &#10005;
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Holiday;