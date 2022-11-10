import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './assets/scss/index.css';

import Home from "./pages/home/Home";
import Profiles from "./pages/Profiles";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/profiles" element={<Profiles/>} />
            <Route path="/profiles/:id" element={<EditProfile/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
