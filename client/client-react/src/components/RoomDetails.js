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
            {/* <span id="count-value">{props.counterData[0].count}</span> */}
            <span id="count-value">{props.counterData[0].count}</span>
          </div>
        </div>
        <div className="table-div">
          <table id="history">
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Entry</th>
              </tr>
            </thead>
            <tbody>
              {props.historyData.slice(-8).map((row) => {
                return (
                  <tr>
                    <td>{row.id}</td>
                    <td>{row.role}</td>
                    <td>{row.entry}</td>
                  </tr>
                )
              })}
            </tbody>
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
