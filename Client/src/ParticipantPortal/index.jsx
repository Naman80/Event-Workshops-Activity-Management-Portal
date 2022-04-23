import React from 'react'
import ParticipantSideBar from "./ParticipantSideBar"
import { Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import LogOut from "./pages/LogOut"

export default [
    <Route path="/participant" element={<ParticipantSideBar />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="logout" element={<LogOut />} />
    </Route>
]