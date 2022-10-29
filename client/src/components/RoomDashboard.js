import {React} from "react";
import rightArrow from "../images/rightArrow.png";

function RoomDashBoard(props) {

    const showDetailsPage = () => {
        props.SetCurrentPage('Details');
    }

    return (
        <>
        <div className="page-title">
            <h1>Room Dashboard</h1>
        </div>
        <div className="rooms-list">
            <p>ICU 1</p>
            {props.counterData[0].count === 0 ? <p id="room-status-free">Free</p> : <p id="room-status-used">In Use</p>}
            <button onClick={showDetailsPage}>
                <img src={rightArrow} className="right-arrow" alt="right arrow"></img>
            </button>
        </div>
        </>
    );
}

export default RoomDashBoard;
