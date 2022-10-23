import React from "react";
import { DeviceFrameset } from 'react-device-frameset';
import RoomDashBoard from "./RoomDashboard";

function Screen(){
    return(
        <DeviceFrameset device='iPhone X' zoom={0.75}>
            <div className="outer-container">
                <div className="timebar">
                    <p>9:41</p>
                </div>
                <RoomDashBoard/>
            </div>
        </DeviceFrameset>
    )
}

export default Screen;