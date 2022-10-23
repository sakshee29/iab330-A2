import {React, useState} from "react";

function RoomDetails() {

    // eslint-disable-next-line
    const [roomStatus, setStatus] = useState("In Use");

    return (
        <>
        <div className="page-title">
            <h1>Room Details</h1>
        </div>
        </>
    );
}

export default RoomDetails;