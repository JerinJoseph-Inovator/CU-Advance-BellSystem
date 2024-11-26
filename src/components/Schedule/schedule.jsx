import React, { useState } from "react";
import "./schedule.css";

function ScheduleTime() {
  const [time, setTime] = useState("");
  const [timesList, setTimesList] = useState([]);

  const addTime = () => {
    if (time && !timesList.includes(time)) {
      setTimesList([...timesList, time]);
      setTime("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTime();
    }
  };

  const removeTime = (timeToRemove) => {
    setTimesList(timesList.filter((t) => t !== timeToRemove));
  };

  const handleSubmit = () => {
    console.log("Submitted times:", timesList);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="card">
          <h2>SCHEDULE TIME</h2>
          <label>Enter Time:</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            onKeyDown={handleKeyDown} // Added onKeyDown listener
            placeholder="Enter time (in mins)"
            className="time-input"
          />
          <div>
            <button className="submit-btn" onClick={addTime}>
              ADD TIME
            </button>
          </div>
        </div>

        <div className="card">
          <h2>ADDED TIMES</h2>
          <ul className="time-list">
            {timesList.map((addedTime, index) => (
              <li key={index} className="time-item">
                {addedTime} mins
                <span
                  className="remove-button"
                  onClick={() => removeTime(addedTime)}
                >
                  ❌
                </span>
              </li>
            ))}
          </ul>
          <div>
            <button className="submit-btn" onClick={handleSubmit}>
              SUBMIT TIMES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleTime;
