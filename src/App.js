import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './app.scss';
import './assets/scss/index.css';
import { HomePage, Dashboard, CompleteEventDetail, EditProfile, EventDetail, Feedback, Settings, Notifications, Recommendation, Myfavorites,UpcomingEvent } from './pages/index';

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
          <Route path="/settings" element={<Settings/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/recommendation" element={<Recommendation/>} />
          <Route path="/eventdetails" element={<EventDetail/>} />
          <Route path="/eventdetails/:id" element={<EventDetail/>} />
          <Route path="/eventdetailcomplete" element={<CompleteEventDetail/>} />
          <Route path="/myfavorites" element={<Myfavorites/>} />
          <Route path="/upcomingevent" element={<UpcomingEvent/>} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
