import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPortal from './AdminPortal';
import CoordinatorPortal from './CoordinatorPortal';
import MainPage from './MainPage/MainPage';
import ParticipantPortal from './ParticipantPortal';

function Routess() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                {AdminPortal}
                {CoordinatorPortal}
                {ParticipantPortal}
            </Routes>
        </Router>
    )
}

export default Routess