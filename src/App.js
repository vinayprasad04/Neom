import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './assets/scss/index.css';
import { HomePage, Dashboard, Profiles, EditProfile, Feedback } from './pages/index';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/edit-profile" element={<EditProfile/>} />
            {/*<Route path="/profiles/:id" element={<EditProfile/>} />*/}
          <Route path="/feedback" element={<Feedback/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
