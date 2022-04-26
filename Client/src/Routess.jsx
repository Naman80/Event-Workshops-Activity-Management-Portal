import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPortal from './AdminPortal';
import CoordinatorPortal from './CoordinatorPortal';
import MainPage from './MainPage/MainPage';
import ParticipantPortal from './ParticipantPortal';
import Events from './MainPage/ComponentsMain/Body/CompBody/BranchEvents/Events';

function Routess() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                {AdminPortal}
                {CoordinatorPortal}
                {ParticipantPortal}
                <Route path = "/CSE" element = {<Events name = "CSE" ></Events>}></Route>
                 <Route path = "/IT" element = {<Events name = "IT" ></Events>}></Route>
                  <Route path = "/ECE" element = {<Events name = "ECE" ></Events>}></Route>
                   <Route path = "/EEE" element = {<Events name = "EEE" ></Events>}></Route>
                    <Route path = "/MAE" element = {<Events name = "MAE" ></Events>}></Route>
                     <Route path = "/ME" element = {<Events name = "ME" ></Events>}></Route>
                      {/* <Route path = "/AI" element = {<Events name = "AI/ML" ></Events>}></Route>
                       <Route path = "/AI/DS" element = {<Events name = "AI/DS" ></Events>}></Route> */}
            </Routes>
        </Router>
    )
}

export default Routess