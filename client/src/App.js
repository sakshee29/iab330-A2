import { React, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '../node_modules/react-device-frameset/dist/styles/marvel-devices.min.css';
import Screen from './components/Screen';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

const baseURL = baseURL = 'http://54.164.110.39';
// var baseURL ;
// if(process.env.NODE_ENV === 'development'){
//   baseURL = 'http://localhost';
// }else {
//   baseURL = 'http://ec2-54-164-110-39.compute-1.amazonaws.com'
// }

function App() {
  const [currentPage, SetCurrentPage] = useState('Dashboard');
  const [historyData, SetHistoryData] = useState([
    {
      "id" : 0,
      "role": "none",
      "entry": "00-00-00",
      "exit": "00-00-00"
    }
  ]);
  const [counterData, SetCounterData] = useState([
    {
      "count": 0
    }
  ]);

  let startTime = performance.now();
  const client = axios.create({
    baseURL: `${baseURL}:4000`
  });

  async function fetchHistoryData () {
    await client
      .get('/history')
      .then((res) => {
        return SetHistoryData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  async function fetchCounterData () {
    await client
      .get('/counter')
      .then((res) => {
        return SetCounterData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchHistoryData();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [historyData]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCounterData();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [counterData]);
  


  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={
            <Screen currentPage={currentPage} 
                    SetCurrentPage={SetCurrentPage} 
                    counterData={counterData}
                    historyData={historyData}
                    startTime={startTime}
             />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 