import "./App.css";
import CoordinatorSideBar from "./components/CoordinatorSideBar"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard"
import CreateEvent from "./components/pages/CreateEvent"
import Profile from "./components/pages/Profile"
import FDP from "./components/pages/FDP"
import Talks from "./components/pages/Talks"
import Webinar from "./components/pages/Webinar"
import Workshops from "./components/pages/Workshops"
import LogOut from "./components/pages/LogOut"
import Applications from "./components/ReportCards/WorkshopCards/pages/Applications";
import Report from "./components/ReportCards/WorkshopCards/pages/Report";
import Status from "./components/ReportCards/WorkshopCards/pages/Status";
import FApplications from "./components/ReportCards/FDPCards/pages/FApplications";
import FReport from "./components/ReportCards/FDPCards/pages/FReport";
import FStatus from "./components/ReportCards/FDPCards/pages/FStatus";
import TApplications from "./components/ReportCards/TalkCards/pages/TApplications";
import TReport from "./components/ReportCards/TalkCards/pages/TReport";
import TStatus from "./components/ReportCards/TalkCards/pages/TStatus";
import WeApplications from "./components/ReportCards/WebinarCards/pages/WeApplications";
import WeReport from "./components/ReportCards/WebinarCards/pages/WeReport";
import WeStatus from "./components/ReportCards/WebinarCards/pages/WeStatus";


function App() {
  return (
    <Router>
      <CoordinatorSideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/createevent" element={<CreateEvent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/FDP" element={<FDP />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/workshop/report" element={<Report />} />
          <Route path="/workshop/status" element={<Status />} />
          <Route path="/workshop/applications" element={<Applications />} />
          <Route path="/webinar/report" element={<WeReport />} />
          <Route path="/webinar/status" element={<WeStatus />} />
          <Route path="/webinar/applications" element={<WeApplications />} />
          <Route path="/talks/report" element={<TReport />} />
          <Route path="/talks/status" element={<TStatus />} />
          <Route path="/talks/applications" element={<TApplications />} />
          <Route path="/fdp/report" element={<FReport />} />
          <Route path="/fdp/status" element={<FStatus />} />
          <Route path="/fdp/applications" element={<FApplications />} />
        </Routes>
      </CoordinatorSideBar>
    </Router>
  );
}

export default App;