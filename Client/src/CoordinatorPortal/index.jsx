import React from 'react'
import CoordinatorSideBar from "./CoordinatorSideBar"
import { Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import FDP from "./pages/FDP"
import Talks from "./pages/Talks"
import Webinar from "./pages/Webinar"
import Workshops from "./pages/Workshops"
import LogOut from "./pages/LogOut"
import MyTask from "./ReportCards/WorkshopCards/pages/MyTask";
import Report from "./ReportCards/WorkshopCards/pages/Report";
import Status from "./ReportCards/WorkshopCards/pages/Status";
import FMyTask from "./ReportCards/FDPCards/pages/FMyTask";
import FReport from "./ReportCards/FDPCards/pages/FReport";
import FStatus from "./ReportCards/FDPCards/pages/FStatus";
import TMyTask from "./ReportCards/TalkCards/pages/TMyTask";
import TReport from "./ReportCards/TalkCards/pages/TReport";
import TStatus from "./ReportCards/TalkCards/pages/TStatus";
import WeMyTask from "./ReportCards/WebinarCards/pages/WeMyTask";
import WeReport from "./ReportCards/WebinarCards/pages/WeReport";
import WeStatus from "./ReportCards/WebinarCards/pages/WeStatus";



export default [
    <Route path="/coordinator" element={<CoordinatorSideBar />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="FDP" element={<FDP />} />
        <Route path="talks" element={<Talks />} />
        <Route path="webinar" element={<Webinar />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="logout" element={<LogOut />} />
        <Route path="workshop/report" element={<Report />} />
        <Route path="workshop/status" element={<Status />} />
        <Route path="workshop/myTask" element={<MyTask />} />
        <Route path="webinar/report" element={<WeReport />} />
        <Route path="webinar/status" element={<WeStatus />} />
        <Route path="webinar/myTask" element={<WeMyTask />} />
        <Route path="talks/report" element={<TReport />} />
        <Route path="talks/status" element={<TStatus />} />
        <Route path="talks/myTask" element={<TMyTask />} />
        <Route path="fdp/report" element={<FReport />} />
        <Route path="fdp/status" element={<FStatus />} />
        <Route path="fdp/myTask" element={<FMyTask />} />
    </Route>
]