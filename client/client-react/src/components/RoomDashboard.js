import {React, useState} from "react";
import rightArrow from "../images/rightArrow.png";

function RoomDashBoard() {

    // eslint-disable-next-line
    const [roomStatus, setStatus] = useState("In Use");

    return (
        <>
        <div className="page-title">
            <h1>Room Dashboard</h1>
        </div>
        <div className="rooms-list">
            <p>ICU 1</p>
            <p id="room-status">{roomStatus}</p>
            <a href="/">
            <img src={rightArrow} className="right-arrow" alt="right arrow"></img>
            </a>
        </div>
        </>
    );
}

export default RoomDashBoard;
