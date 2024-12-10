import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./holiday.css";

function Holiday() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [holidays, setHolidays] = useState([]);

  const serverUrl = "http://172.16.216.251:8080/holiday";

  const addHoliday = (date) => {
    const formattedDate = date.toLocaleDateString("en-GB");
    if (!holidays.includes(formattedDate)) {
      setHolidays((prev) => [...prev, { type: "single", value: formattedDate }]);
    }
  };

  const addHolidayRange = (start, end) => {
    const formattedRange = `${start.toLocaleDateString(
      "en-GB"
    )} - ${end.toLocaleDateString("en-GB")}`;
    if (!holidays.some((holiday) => holiday.value === formattedRange)) {
      setHolidays((prev) => [
        ...prev,
        { type: "range", value: formattedRange, start, end },
      ]);
    }
  };

  const removeHoliday = (date) => {
    setHolidays(holidays.filter((d) => d.value !== date));
  };

  const sendHoliday = async (holiday) => {
    let payload = {};

    if (holiday.type === "single") {
      payload = {
        mode: "0", // Replacing "type" with "mode"
        date: holiday.value, // use the exact date as a string
      };
    } else if (holiday.type === "range") {
      const { start, end } = holiday;
      payload = {
        mode: "0", // Replacing "type" with "mode"
        startDate: start.toLocaleDateString("en-GB"), // start date as string
        endDate: end.toLocaleDateString("en-GB"), // end date as string
      };
    }

    try {
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Send the payload as JSON
      });

      console.log(payload);

      if (response.ok) {
        alert(`Successfully sent: ${JSON.stringify(payload)}`);
      } else {
        alert(`Failed to send: ${JSON.stringify(payload)}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="card">
          <h2>SELECT SINGLE DATE</h2>
          <label>Select:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd-MM-yyyy"
            className="date-input"
          />
          <div>
            <button
              className="submit-btn"
              onClick={() => selectedDate && addHoliday(selectedDate)}
            >
              ADD DATE
            </button>
          </div>
        </div>

        <div className="card">
          <h2>SELECT MULTIPLE DATES</h2>
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
          <div>
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
          </div>
          <div>
            <button
              className="submit-btn"
              onClick={() =>
                startDate &&
                endDate &&
                addHolidayRange(startDate, endDate)
              }
            >
              ADD DATES
            </button>
          </div>
        </div>

        <div className="card">
          <h2>HOLIDAYS ADDED</h2>
          <ul className="holiday-list">
            {holidays.map((holiday, index) => (
              <li key={index} className="holiday-item">
                {holiday.value}
                <span
                  className="remove-button"
                  onClick={() => removeHoliday(holiday.value)}
                >
                  ❌
                </span>
                <button
                  className="submit-btn"
                  onClick={() => sendHoliday(holiday)}
                >
                  SUBMIT
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Holiday;
