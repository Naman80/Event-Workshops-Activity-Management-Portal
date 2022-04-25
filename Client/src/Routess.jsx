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
                <Route path = "/CSE" element = {<Events name = {'CSE'} ></Events>}></Route>
            </Routes>
        </Router>
    )
}

export default Routess