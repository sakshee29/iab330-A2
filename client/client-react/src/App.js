import { React, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '../node_modules/react-device-frameset/dist/styles/marvel-devices.min.css';
import Screen from './components/Screen';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [currentPage, SetCurrentPage] = useState('Details');
  const [historyData, SetHistoryData] = useState('');
  const [counterData, SetCounterData] = useState('');
  const hostname = '127.0.0.1';

  const client = axios.create({
    baseURL: `http://${hostname}:4000`
  });

  async function fetchHistoryData () {
    await client
      .get('/history')
      .then((res) => {
        if (JSON.stringify(res.data) !== JSON.stringify(historyData)){
          console.log("History Updates")
          console.log(historyData);
          return SetHistoryData(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  async function fetchCounterData () {
    await client
      .get('/counter')
      .then((res) => {
        if (JSON.stringify(res.data) !== JSON.stringify(counterData)){
          console.log("Counter Updates")
          console.log(counterData);
          return SetCounterData(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      fetchHistoryData();
    }, 5000);
    return () => clearInterval(interval);
  }, [historyData]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      fetchCounterData();
    }, 5000);
    return () => clearInterval(interval);
  }, [counterData]);
  


  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<Screen currentPage={currentPage} SetCurrentPage={SetCurrentPage} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 