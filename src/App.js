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
  const [cancelled, setCancelled] = useState(false);
  const [rCancelAlert, setRCancelAlert] = useState({crAlert:false, srAlert:false});
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout api={api} setApi={setApi} />}>
            <Route path="/" element={<Dashboard api={api} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
            <Route path="/home" element={<HomePage rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
            <Route path="/dashboard" element={<Dashboard api={api} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
            <Route path="/edit-profile" element={<EditProfile api={api} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
              {/*<Route path="/profiles/:id" element={<EditProfile/>} />*/}
            <Route path="/feedback" element={<Feedback api={api} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
            <Route path="/settings" element={<Settings api={api} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
            <Route path="/notifications" element={<Notifications api={api} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
            <Route path="/recommendation" element={<Recommendation api={api} setCancelled={setCancelled} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
            <Route path="/eventdetails" element={<EventDetail api={api} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert} />} />
            <Route path="/eventdetails/:id" element={<EventDetail api={api} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
            <Route path="/eventdetailcomplete" element={<CompleteEventDetail api={api} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
            <Route path="/myfavorites" element={<Myfavorites api={api} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
            <Route path="/upcomingevent" element={<UpcomingEvent api={api} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
