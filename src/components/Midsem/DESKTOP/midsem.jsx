import React, { useState } from 'react';
import './midsem.css';

function Midsem() {
  const [slots, setSlots] = useState([
    { slot: 1, startDate: '', endDate: '', startTime: '' },
    { slot: 2, startDate: '', endDate: '', startTime: '' },
    { slot: 3, startDate: '', endDate: '', startTime: '' },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedSlots = [...slots];
    updatedSlots[index][field] = value;
    setSlots(updatedSlots);
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  const formatTime = (time) => {
    return `${time}:00`; // Add seconds for hh:mm:ss format
  };

  const handleSubmit = (slotData) => {
    if (!slotData.startDate || !slotData.endDate || !slotData.startTime) {
      alert(`Please fill all fields for Slot ${slotData.slot}`);
      return;
    }

    const payload = {
      mode: '1',
      slot: `${slotData.slot}`,
      'start date': formatDate(slotData.startDate),
      'end date': formatDate(slotData.endDate),
      start_time: formatTime(slotData.startTime),
    };

    // Send the data to the server
    fetch('https://172.16.216.251:8000/midsem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Slot ${slotData.slot} data sent successfully:`, data);
      })
      .catch((error) => {
        console.error(`Error sending data for Slot ${slotData.slot}:`, error);
      });

    console.log(payload);
  };

  return (
    <div className="container">
      <div className="slots-wrapper">
        {slots.map((slot, index) => (
          <div key={index} className="slot-card">
            <h2 className="slot-title">SLOT {slot.slot}</h2>
            <label className="input-label">
              Start Date:
              <input
                type="date"
                className="input-date"
                value={slot.startDate}
                onChange={(e) =>
                  handleInputChange(index, 'startDate', e.target.value)
                }
              />
            </label>
            <label className="input-label">
              End Date:
              <input
                type="date"
                className="input-date"
                value={slot.endDate}
                onChange={(e) =>
                  handleInputChange(index, 'endDate', e.target.value)
                }
              />
            </label>
            <label className="input-label">
              Start Time:
              <input
                type="time"
                className="input-time"
                value={slot.startTime}
                onChange={(e) =>
                  handleInputChange(index, 'startTime', e.target.value)
                }
              />
            </label>
            <button
              className="slot-submit-button"
              onClick={() => handleSubmit(slot)}
            >
              SUBMIT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Midsem;
