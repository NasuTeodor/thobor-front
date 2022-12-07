import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import Particule from './Components/Particule';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Particule />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
