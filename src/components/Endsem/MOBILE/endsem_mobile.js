import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [selectedDates, setSelectedDates] = useState('');
  const [timeSlot1, setTimeSlot1] = useState('');
  const [timeSlot2, setTimeSlot2] = useState('');

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <button className="menu-button">&#9776;</button>
        <h1>ENDSEM</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Christ_University_logo.png/800px-Christ_University_logo.png"
          alt="Christ University Logo"
          className="logo"
        />
        <button className="back-button">&#8634;</button>
      </header>

      <div className="calendar-main">
        <button className="nav-button">&#8592;</button>
        <div className="calendar">
          <div className="month">NOVEMBER 2024</div>
          <div className="days">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
          </div>
          <div className="dates">
            {Array(6).fill(0).map((_, weekIndex) =>
              Array(7).fill(0).map((_, dayIndex) => {
                const date = weekIndex * 7 + dayIndex - 2;
                if (date < 1 || date > 30) return <div className="empty" key={`${weekIndex}-${dayIndex}`}></div>;
                const isSelected = date === 6 || date === 7 || date === 8;
                return (
                  <div key={`${weekIndex}-${dayIndex}`} className={`date ${isSelected ? 'selected' : ''}`}>
                    {date}
                  </div>
                );
              })
            )}
          </div>
        </div>
        <button className="nav-button">&#8594;</button>
      </div>

      <div className="time-slots">
        <div>Selected Dates:</div>
        <input
          type="text"
          value={selectedDates}
          onChange={(e) => setSelectedDates(e.target.value)}
          className="input-field"
        />
        <div className="slot-label">
          Times Slot 1:
          <input
            type="checkbox"
            checked={timeSlot1}
            onChange={() => setTimeSlot1(!timeSlot1)}
          />
          <input
            type="text"
            value={timeSlot1}
            onChange={(e) => setTimeSlot1(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="slot-label">
          Times Slot 2:
          <input
            type="checkbox"
            checked={timeSlot2}
            onChange={() => setTimeSlot2(!timeSlot2)}
          />
          <input
            type="text"
            value={timeSlot2}
            onChange={(e) => setTimeSlot2(e.target.value)}
            className="input-field"
          />
        </div>
      </div>

      <div className="buttons">
        <button className="action-button">REFRESH</button>
        <button className="action-button">UNDO</button>
        <button className="action-button">RESET</button>
        <button className="action-button">SAVE</button>
      </div>
    </div>
  );
};

export default Calendar;
