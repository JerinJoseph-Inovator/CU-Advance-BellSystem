import React from "react";
import "./Display.css";

function Display() {
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
          {/* Empty rows */}
          {Array.from({ length: 7 }).map((_, index) => (
            <tr key={index}>
              <td className="cell_d"></td>
              <td className="cell_d"></td>
              <td className="cell_d"></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Navigation Arrows */}
      <div className="navigation_d">
        
        <button className="arrowButton_d">&larr;</button>
        <button className="arrowButton_d">&rarr;</button>
        
      </div>
    </div>
  );
}

export default Display;
