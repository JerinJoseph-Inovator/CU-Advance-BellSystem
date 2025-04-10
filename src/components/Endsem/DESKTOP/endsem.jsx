import React, { useState } from "react";
import "./endsem.css";

const Endsem = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [timeSlot1, setTimeSlot1] = useState({ hour: "10", minute: "00", period: "AM", selected: false });
  const [timeSlot2, setTimeSlot2] = useState({ hour: "10", minute: "00", period: "AM", selected: false });
  const [history, setHistory] = useState([]);

  const getMonthDays = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const datesArray = [];
    for (let i = 0; i < firstDay; i++) datesArray.push(null);
    for (let i = 1; i <= daysInMonth; i++) datesArray.push(i);
    return datesArray;
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year.slice(2)}`;
  };

  const handleDateClick = (day) => {
    if (!day) return;
    const dateStr = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;
    setHistory([...history, selectedDates]);
    const updatedDates = [...selectedDates];
    if (selectedDates.includes(dateStr)) {
      setSelectedDates(updatedDates.filter((date) => date !== dateStr));
    } else {
      updatedDates.push(dateStr);
      setSelectedDates(updatedDates);
    }
  };

  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const prevSelection = history.pop();
      setSelectedDates(prevSelection);
      setHistory(history);
    }
  };

  const handleReset = () => {
    setSelectedDates([]);
    setTimeSlot1({ hour: "10", minute: "00", period: "AM", selected: false });
    setTimeSlot2({ hour: "10", minute: "00", period: "AM", selected: false });
    setHistory([]);
  };

  const handleTimeSlotSelection = (slot) => {
    if (slot === 1) {
      setTimeSlot1({ ...timeSlot1, selected: true });
      setTimeSlot2({ ...timeSlot2, selected: false });
    } else {
      setTimeSlot2({ ...timeSlot2, selected: true });
      setTimeSlot1({ ...timeSlot1, selected: false });
    }
  };

  const handleRefresh = () => {
    setCurrentDate(new Date());
    setSelectedDates([]);
    setTimeSlot1({ hour: "10", minute: "00", period: "AM", selected: false });
    setTimeSlot2({ hour: "10", minute: "00", period: "AM", selected: false });
    setHistory([]);
  };

  const timeOptions = {
    hours: Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")),
    minutes: Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0")),
    periods: ["AM", "PM"],
  };

  const handleSave = () => {
    // Function to convert time from AM/PM to 24-hour format
    const convertTo24HourFormat = (hour, minute, period) => {
      let hours = parseInt(hour);
      if (period === "PM" && hours !== 12) {
        hours += 12;
      }
      if (period === "AM" && hours === 12) {
        hours = 0;
      }
      return `${hours.toString().padStart(2, "0")}:${minute}:00`;
    };
  
    // Determine selected time slot
    const selectedSlot = timeSlot1.selected ? 1 : timeSlot2.selected ? 2 : null;
  
    // If no slot is selected, return early with an alert
    if (!selectedSlot) {
      alert("Please select a time slot before saving.");
      return;
    }
  
    const selectedTimeSlot = selectedSlot === 1 ? timeSlot1 : timeSlot2;
    const formattedTime = convertTo24HourFormat(
      selectedTimeSlot.hour,
      selectedTimeSlot.minute,
      selectedTimeSlot.period
    );
  
    selectedDates.forEach((date) => {
      const [year, month, day] = date.split("-");
      const formattedDate = `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year.slice(2)}`;
  
      const payload = {
        mode: "2",
        slot: selectedSlot.toString(), // "1" or "2" based on selection
        date: { [formattedDate]: null },
        start_time: formattedTime,
      };

      console.log("Payload to be sent:", payload);
  
      fetch("http://172.16.216.251:8080/endsem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            alert(`Data for ${formattedDate} sent successfully.`);
            return response.json();
          } else {
            throw new Error(`Failed to send data for ${formattedDate}`);
          }
        })
        .then((data) => {
          console.log(`Data for ${formattedDate} sent successfully:`, data);
        })
        .catch((error) => {
          alert(`Error sending data for ${formattedDate}: ${error.message}`);
          console.error(`Error sending data for ${formattedDate}:`, error);
        });
    });
  };
  
  

  return (
    <div className="calendar-container">
      <div className="calendar-main">
        <button className="nav-button" onClick={handlePreviousMonth}>
          &#8592;
        </button>
        <div className="calendar">
          <div className="month">
            {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </div>
          <div className="days">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="dates">
            {getMonthDays(currentDate.getFullYear(), currentDate.getMonth()).map((day, index) => (
              <div
                key={index}
                className={`date ${selectedDates.includes(
                  `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`
                )
                  ? "selected"
                  : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day || ""}
              </div>
            ))}
          </div>
        </div>
        <button className="nav-button" onClick={handleNextMonth}>
          &#8594;
        </button>
      </div>

      <div className="time-slots">
        <div>Selected Dates:</div>
        <input
          type="text"
          value={selectedDates.map(formatDate).join(", ")}
          readOnly
        />
        <div className="slot-label">
          <input
            type="radio"
            id="slot1-checkbox"
            name="time-slot"
            checked={timeSlot1.selected}
            onChange={() => handleTimeSlotSelection(1)}
          />
          <label htmlFor="slot1-checkbox">Time Slot 1:</label>
          <select
            value={timeSlot1.hour}
            onChange={(e) => setTimeSlot1({ ...timeSlot1, hour: e.target.value })}
            disabled={!timeSlot1.selected}
          >
            {timeOptions.hours.map((hour) => (
              <option key={hour}>{hour}</option>
            ))}
          </select>
          <select
            value={timeSlot1.minute}
            onChange={(e) => setTimeSlot1({ ...timeSlot1, minute: e.target.value })}
            disabled={!timeSlot1.selected}
          >
            {timeOptions.minutes.map((minute) => (
              <option key={minute}>{minute}</option>
            ))}
          </select>
          <select
            value={timeSlot1.period}
            onChange={(e) => setTimeSlot1({ ...timeSlot1, period: e.target.value })}
            disabled={!timeSlot1.selected}
          >
            {timeOptions.periods.map((period) => (
              <option key={period}>{period}</option>
            ))}
          </select>
        </div>
        <div className="slot-label">
          <input
            type="radio"
            id="slot2-checkbox"
            name="time-slot"
            checked={timeSlot2.selected}
            onChange={() => handleTimeSlotSelection(2)}
          />
          <label htmlFor="slot2-checkbox">Time Slot 2:</label>
          <select
            value={timeSlot2.hour}
            onChange={(e) => setTimeSlot2({ ...timeSlot2, hour: e.target.value })}
            disabled={!timeSlot2.selected}
          >
            {timeOptions.hours.map((hour) => (
              <option key={hour}>{hour}</option>
            ))}
          </select>
          <select
            value={timeSlot2.minute}
            onChange={(e) => setTimeSlot2({ ...timeSlot2, minute: e.target.value })}
            disabled={!timeSlot2.selected}
          >
            {timeOptions.minutes.map((minute) => (
              <option key={minute}>{minute}</option>
            ))}
          </select>
          <select
            value={timeSlot2.period}
            onChange={(e) => setTimeSlot2({ ...timeSlot2, period: e.target.value })}
            disabled={!timeSlot2.selected}
          >
            {timeOptions.periods.map((period) => (
              <option key={period}>{period}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="buttons">
        <button className="action-button" onClick={handleRefresh}>
          REFRESH
        </button>
        <button className="action-button" onClick={handleUndo}>
          UNDO
        </button>
        <button className="action-button" onClick={handleReset}>
          RESET
        </button>
        <button className="action-button" onClick={handleSave}>SAVE</button>
      </div>
    </div>
  );
};

export default Endsem;
