import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Labs from './labs';
import Tuiter from './tuiter';
import Assignment3 from './labs/a3';
import Assignment4 from './labs/a4';
import Navigation from './nav'
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
  <BrowserRouter>
    <div className ="container">
      <Navigation />
      <Routes>
        <Route path ="/tuiter" element={<Tuiter />} />
        <Route path ="/labs" element={<Labs />} />
        <Route path ="/labs/a3" element={<Assignment3 />} />
        <Route path ="/labs/a4" element={<Assignment4 />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
  
}

export default App;
