import React from "react";
import rightArrow from '../images/rightArrow.png';
import { DeviceFrameset } from 'react-device-frameset';

function RoomDashBoard(){
    return(
        <DeviceFrameset device='iPhone X' zoom={0.75}>
            <div className="outer-container">
                <div className="timebar">
                    <p>9:41</p>
                </div>
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
            </div>
        </DeviceFrameset>
    )
}

export default RoomDashBoard;