import React from 'react';
import './HelpPage.css'; // Create this CSS file to style the page

const HelpPage = () => {
  return (
    <div className="help-page">
      <header className="header">
        <h1>Help & Support : DeciBell</h1>
        <p>Welcome to the help page for our IoT Bell Management System! Here, you’ll find answers to common questions, setup guides, and troubleshooting tips to ensure you get the most out of our system.</p>
      </header>

      <section className="section">
        <h2>📋 Getting Started</h2>
        <ul>
          <li>Enter the Login Page</li>
          <li>Enter the Username and Password</li>
          <li>Click Login</li>
        </ul>
      </section>

      <section className="section">
        <h2>🏠 Home Page</h2>
        <p>On the Top Left Corner of the Home Page, there is a drop-down menu with five buttons: Regular, MidSem, EndSem, Emergency, Holiday, and Display.</p>
      </section>

      <section className="section">
        <h2>🔐 Door Closing Time</h2>
        <p>
          It is the Reporting Time of the Students who are supposed to be in their allotted classrooms to write their exams. After this time Students are not allowed to enter their allotted classroom unless they get permission from the Examinations Office.
        </p>
        <p>Abbreviations :</p>
        <ul>
          <li>RTB - Reporting Time Bell</li>
          <li>WT - Writing Time</li>
          <li>BBT - Before Bell Time</li>
          <li>FBT - Final Bell Time</li>
        </ul>
      </section>

      <section className="section">
        <h2>📅 MidSem</h2>
        <ul>
          <li>There are 3 slots defined in the MidSem Page</li>
          <li>Each Slot contains 3 drop-downs: Start Date, End Date, and Select Time i.e. Door Closing Time.</li>
          <li>The Start & End Date button contains a calendar when you click it to set the Start and the End Dates.</li>
          <li>After Selecting the number of slots you want for the day click on the ‘Submit’ Button.</li>
        </ul>
        <table className="table">
          <thead>
            <tr>
              <th>Days</th>
              <th>DTC</th>
              <th>RTB</th>
              <th>WT</th>
              <th>BBT</th>
              <th>FBT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>09:15</td>
              <td>09:20</td>
              <td>09:30</td>
              <td>11:20</td>
              <td>11:30</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>09:15</td>
              <td>09:20</td>
              <td>09:30</td>
              <td>11:20</td>
              <td>11:30</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>📚 EndSem</h2>
        <p>
          The End-Sem Page has a calendar to select the dates for End Semester Examinations. When you select a date, the chosen date will be displayed in the Selected Dates Box located below the calendar.
        </p>
        <ul>
          <li>Below are two time slots buttons i.e. Time Slot 1 & Time Slot 2.</li>
          <li>In these 2 time slots select the common time of the door closing time of those 2 slots.</li>
          <li>If the date selected is wrong, then there is an UNDO Button below which you can unselect the date.</li>
        </ul>
        <table className="table">
          <thead>
            <tr>
              <th>Days</th>
              <th>DTC</th>
              <th>RTB</th>
              <th>WT</th>
              <th>BBT</th>
              <th>FBT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>09:15</td>
              <td>09:20</td>
              <td>09:30</td>
              <td>12:20</td>
              <td>12:30</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>🚨 Emergency</h2>
        <p>In case of an Emergency, type EMERGENCY and Press the Button.</p>
      </section>

      <section className="section">
        <h2>🏖️ Holiday</h2>
        <p>On the Holiday Page, there are 2 ways to select the dates:</p>
        <ul>
          <li>The first box contains a date picker so when you click it, there is a drop-down calendar. Select the date you want as a holiday.</li>
          <li>In the second box, you can select the range of days you want as a holiday.</li>
        </ul>
        <p>There is a submit button to which when you click it the selected dates are submitted.</p>
      </section>

      <section className="section">
        <h2>📺 Display</h2>
        <p>On the Display Page, the upcoming bell timings are displayed for each slot in order.</p>
      </section>

      <section className="section">
        <h2>↩️ Logout</h2>
        <p>If you want to Log-out of the website, click on the Logout Button on the Top Right Corner of the website.</p>
      </section>
    </div>
  );
};

export default HelpPage;
