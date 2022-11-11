import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './assets/scss/index.css';
import { HomePage, Dashboard } from './pages/index';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
