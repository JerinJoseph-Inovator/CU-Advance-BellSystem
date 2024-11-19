import React, { useState } from 'react';
import './endsem.css';

const Endsem = () => {
  const [selectedDates, setSelectedDates] = useState('');
  const [timeSlot1, setTimeSlot1] = useState('');
  const [timeSlot2, setTimeSlot2] = useState('');

  return (
    <div className="calendar-container">

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
        />
        <div className="slot-label">
          <input
            type="checkbox"
            checked={timeSlot1}
            onChange={() => setTimeSlot1(!timeSlot1)}
          />
          Times Slot 1:
          <input
            type="text"
            value={timeSlot1}
            onChange={(e) => setTimeSlot1(e.target.value)}
          />
        </div>
        <div className="slot-label">
          <input
            type="checkbox"
            checked={timeSlot2}
            onChange={() => setTimeSlot2(!timeSlot2)}
          />
          Times Slot 2:
          <input
            type="text"
            value={timeSlot2}
            onChange={(e) => setTimeSlot2(e.target.value)}
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

export default Endsem;
