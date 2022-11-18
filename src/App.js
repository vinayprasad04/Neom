import React, {createContext, useEffect, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './app.scss';
import './assets/scss/index.css';
import { HomePage, Dashboard, CompleteEventDetail, EditProfile, EventDetail, Feedback, Settings, Notifications, Recommendation, Myfavorites,UpcomingEvent } from './pages/index';
import Layout from './component/Layout';


function App() {
  const [api, setApi] = useState(false);
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout api={api} setApi={setApi}/>}>
            <Route path="/" element={<Dashboard api={api}/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/dashboard" element={<Dashboard api={api}/>} />
            <Route path="/edit-profile" element={<EditProfile api={api}/>} />
              {/*<Route path="/profiles/:id" element={<EditProfile/>} />*/}
            <Route path="/feedback" element={<Feedback api={api}/>} />
            <Route path="/settings" element={<Settings api={api}/>} />
            <Route path="/notifications" element={<Notifications api={api}/>} />
            <Route path="/recommendation" element={<Recommendation api={api}/>} />
            <Route path="/eventdetails" element={<EventDetail api={api}/>} />
            <Route path="/eventdetails/:id" element={<EventDetail api={api}/>} />
            <Route path="/eventdetailcomplete" element={<CompleteEventDetail api={api}/>} />
            <Route path="/myfavorites" element={<Myfavorites api={api}/>} />
            <Route path="/upcomingevent" element={<UpcomingEvent api={api}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
