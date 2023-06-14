import React from 'react';
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";

function App() {
  console.log(process.env.REACT_APP_API_BASE);

  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/labs" />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
