import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPortal from './AdminPortal';
import CoordinatorPortal from './CoordinatorPortal';
import MainPage from './MainPage/MainPage';
import ParticipantPortal from './ParticipantPortal';
import Login from "./Authenticators/Login";
import Registration from "./Authenticators/Registration";

function Routess() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                {AdminPortal}
                {CoordinatorPortal}
                {ParticipantPortal}
            </Routes>
        </Router>
    )
}

export default Routess