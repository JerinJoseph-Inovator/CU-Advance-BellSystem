import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for API requests
import https from "https"; // Import https for creating an agent
import "./Display.css";

function Display() {
  const [data, setData] = useState([]); // State to store fetched data
  const [currentPage, setCurrentPage] = useState(0); // State for pagination
  const rowsPerPage = 7; // Number of rows per page

  // Create an HTTPS agent to bypass SSL verification
  // const httpsAgent = new https.Agent({
  //   rejectUnauthorized: false, // Disable SSL verification
  // });

  // Fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get("http://172.16.216.251:8080/display");
      setData(response.data); // Assume server sends an array of objects
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Pagination logic
  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (endIndex < data.length) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container_d">
      {/* Table */}
      <table className="table_d">
        <thead>
          <tr>
            <th className="header_d">TYPE</th>
            <th className="header_d">DATE</th>
            <th className="header_d">SLOT TIMES</th>
          </tr>
        </thead>
        <tbody>
          {/* Display rows */}
          {currentData.length > 0 ? (
            currentData.map((item, index) => (
              <tr key={index}>
                <td className="cell_d">{item.type}</td>
                <td className="cell_d">{item.date}</td>
                <td className="cell_d">{item.slot_times}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="cell_d">
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Navigation Arrows */}
      <div className="navigation_d">
        <button
          className="arrowButton_d"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          &larr;
        </button>

        {/* Refresh Button */}
        <button className="refreshButton_d" onClick={fetchData}>
          Refresh
        </button>

        <button
          className="arrowButton_d"
          onClick={handleNextPage}
          disabled={endIndex >= data.length}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default Display;