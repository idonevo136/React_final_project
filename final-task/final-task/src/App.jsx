import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './view/pages/Auth/UserContext';
import DevNavbar from "./view/component/DevNavbar/DevNavbar";
import Home from './view/pages/Home/Home';
import Search from './view/pages/Search/Search';
import Results from './view/pages/Results/Results';
import ScholarshipDetails from './view/pages/ScholarshipDetails/ScholarshipDetails';
import Dashboard from './view/pages/Dashboard/Dashboard';
import HelpSettings from './view/pages/HelpSettings/HelpSettings';
import Login from './view/pages/Auth/Login';
import SignUp from './view/pages/Auth/SignUp';
import ForgotPassword from './view/pages/Auth/ForgotPassword';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <DevNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/results" element={<Results />} />
          <Route path="/details" element={<ScholarshipDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help" element={<HelpSettings />} />

          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}