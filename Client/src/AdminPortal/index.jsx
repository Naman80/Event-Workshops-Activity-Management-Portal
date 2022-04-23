import React from 'react'
import AdminSideBar from "./AdminSideBar"
import { Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import CreateEvent from "./pages/CreateEvent"
import Profile from "./pages/Profile"
import FDP from "./pages/FDP"
import Talks from "./pages/Talks"
import Webinar from "./pages/Webinar"
import Workshops from "./pages/Workshops"
import LogOut from "./pages/LogOut"
import Applications from "./ReportCards/WorkshopCards/pages/Applications";
import Report from "./ReportCards/WorkshopCards/pages/Report";
import Status from "./ReportCards/WorkshopCards/pages/Status";
import FApplications from "./ReportCards/FDPCards/pages/FApplications";
import FReport from "./ReportCards/FDPCards/pages/FReport";
import FStatus from "./ReportCards/FDPCards/pages/FStatus";
import TApplications from "./ReportCards/TalkCards/pages/TApplications";
import TReport from "./ReportCards/TalkCards/pages/TReport";
import TStatus from "./ReportCards/TalkCards/pages/TStatus";
import WeApplications from "./ReportCards/WebinarCards/pages/WeApplications";
import WeReport from "./ReportCards/WebinarCards/pages/WeReport";
import WeStatus from "./ReportCards/WebinarCards/pages/WeStatus";
import WorkshopEvent from '../components/Forms/Types/WorkshopEvent';
import WebinarEvent from '../components/Forms/Types/WebinarEvent';
import FDPEvent from '../components/Forms/Types/FDPEvent';
import TalksEvent from '../components/Forms/Types/TalksEvent';



export default [
    <Route path="/admin" element={<AdminSideBar />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="createevent" element={<CreateEvent />} />
        <Route path="profile" element={<Profile />} />
        <Route path="FDP" element={<FDP />} />
        <Route path="talks" element={<Talks />} />
        <Route path="webinar" element={<Webinar />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="logout" element={<LogOut />} />
        <Route path="workshop/report/:eventId" element={<Report />} />
        <Route path="workshop/status/:eventId" element={<Status />} />
        <Route path="workshop/applications/:eventId" element={<Applications />} />
        <Route path="webinar/report/:eventId" element={<WeReport />} />
        <Route path="webinar/status/:eventId" element={<WeStatus />} />
        <Route path="webinar/applications/:eventId" element={<WeApplications />} />
        <Route path="talks/report/:eventId" element={<TReport />} />
        <Route path="talks/status/:eventId" element={<TStatus />} />
        <Route path="talks/applications/:eventId" element={<TApplications />} />
        <Route path="fdp/report/:eventId" element={<FReport />} />
        <Route path="fdp/status/:eventId" element={<FStatus />} />
        <Route path="fdp/applications/:eventId" element={<FApplications />} />
        <Route path="create/webinar" element={<WebinarEvent />} />
        <Route path="create/fdp" element={<FDPEvent />} />
        <Route path="create/workshop" element={<WorkshopEvent />} />
        <Route path="create/talks" element={<TalksEvent />} />

    </Route>
]