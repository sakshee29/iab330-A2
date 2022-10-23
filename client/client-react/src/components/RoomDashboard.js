import React from "react";
import rightArrow from "../images/rightArrow.png";

function RoomDashBoard() {
  return (
    <>
      <div className="page-title">
        <h1>Room Dashboard</h1>
      </div>
      <div className="rooms-list">
        <p>ICU 1</p>
        <p id="room-status">In Use</p>
        <a href="/">
          <img src={rightArrow} className="right-arrow" alt="right arrow"></img>
        </a>
      </div>
    </>
  );
}

export default RoomDashBoard;
