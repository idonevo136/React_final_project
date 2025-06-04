import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DevNavbar from "./view/component/DevNavbar/DevNavbar";
import Home from './view/pages/Home/Home';
import Search from './view/pages/Search/Search';
import Results from './view/pages/Results/Results';
import ScholarshipDetails from './view/pages/ScholarshipDetails/ScholarshipDetails';
import Dashboard from './view/pages/Dashboard/Dashboard';
import HelpSettings from './view/pages/HelpSettings/HelpSettings';
import Auth from './view/pages/Auth/Auth';

export default function App() {
  return (
    <Router>
      <DevNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/details" element={<ScholarshipDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<HelpSettings />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}