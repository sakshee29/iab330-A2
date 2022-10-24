import { React } from "react";
import home from "../images/home.png"

function RoomDetails(props) {
  // eslint-disable-next-line
  const returnHome = () => {
    props.SetCurrentPage('Dashboard');
  }

  return (
    <>
      <div className="page-title">
        <h1>Room Details</h1>
        <div className="room-info">
          <p>Room : ICU 1</p>
          <p>Room ID : 1234</p>
          <div className="people-count">
            <span id="count-heading">Current number of people</span>
            <span id="count-value">5</span>
          </div>
          <div className="people-count">
            <span id="count-heading">Time in use</span>
            <span id="count-value">7:12</span>
          </div>
        </div>
        <div className="table-div">
          <table id="history">
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Duration</th>
            </tr>
            <tr>
              <td>03424</td>
              <td>Visitor</td>
              <td>00:30</td>
            </tr>
            <tr>
              <td>03424</td>
              <td>Nurse</td>
              <td>00:30</td>
            </tr>
            <tr>
              <td>03424</td>
              <td>Doctor</td>
              <td>00:30</td>
            </tr>
            <tr>
              <td>03424</td>
              <td>Doctor</td>
              <td>00:30</td>
            </tr>
            <tr>
              <td>03424</td>
              <td>Nurse</td>
              <td>00:30</td>
            </tr>
          </table>
        </div>
        <button onClick={returnHome} className="home-icon" >
            <img src={home} alt="home icon"></img>
        </button>
      </div>
    </>
  );
}

export default RoomDetails;
