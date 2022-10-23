import { React, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '../node_modules/react-device-frameset/dist/styles/marvel-devices.min.css';
import Screen from './components/Screen';
import './App.css';

function App() {
  const [currentPage, SetCurrentPage] = useState('Dashboard');

  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<Screen currentPage={currentPage} />}>
            </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
