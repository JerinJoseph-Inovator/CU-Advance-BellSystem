import React, { useState } from "react";
import axios from "axios";
import "./schedule.css";

function ScheduleTime() {
  const [time, setTime] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (!time) {
      alert("Please enter a valid time!");
      return;
    }

    setIsSending(true);

    try {
      const data = { "time": Number(time) }; // Sending the input time as { time: N }
      const response = await axios.post("http://172.16.216.251:8080/schedule", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Time submitted successfully:", response.data);
        alert("Time submitted successfully!");
        setTime(""); // Reset input field after submission
      } else {
        console.error("Error submitting time:", response.statusText);
        alert("Error submitting time. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting time:", error);
      alert("Error submitting time. Please try again.");
    } finally {
      setIsSending(false);
    }
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
            onKeyDown={handleKeyDown}
            placeholder="Enter time (in mins)"
            className="time-input"
          />
          <div>
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={isSending}
            >
              {isSending ? "Submitting..." : "SUBMIT TIME"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleTime;
