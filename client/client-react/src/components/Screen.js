import React from "react";
import { DeviceFrameset } from 'react-device-frameset';
import RoomDashBoard from "./RoomDashboard";
import RoomDetails from "./RoomDetails";

function Screen(props){

    return(
        <DeviceFrameset device='iPhone X' zoom={0.75}>
            <div className="outer-container">
                <div className="timebar">
                    <p>9:41</p>
                </div>
                {props.currentPage === "Dashboard" ? 
                    <RoomDashBoard 
                        SetCurrentPage={props.SetCurrentPage} 
                        counterData={props.counterData} 
                    /> 
                    : 
                    <RoomDetails 
                        SetCurrentPage={props.SetCurrentPage} 
                        counterData={props.counterData} 
                        historyData={props.historyData}
                        startTime={props.startTime}
                    />
                }
            </div>
        </DeviceFrameset>
    )
}

export default Screen;