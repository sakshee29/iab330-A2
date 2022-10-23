import React from "react";
import { DeviceFrameset } from 'react-device-frameset';

function RoomDashBoard(){
    return(
        <DeviceFrameset device='iPhone X' zoom={0.75}>
            <div className="outer-container">
                <div className="timebar">
                    <p>9:41</p>
                </div>
                <div className="inner-container">
                    <h1>Room Dashboard</h1>
                </div>
            </div>
        </DeviceFrameset>
    )
}

export default RoomDashBoard;