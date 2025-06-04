import React from "react";
import { Link } from "react-router-dom";
import "./DevNavbar.css";

export default function DevNavbar() {
  return (
    <nav className="dev-navbar">
      <Link className="nav-btn" to="/">Home</Link>
      <Link className="nav-btn" to="/dashboard">Dashboard</Link>
      <Link className="nav-btn" to="/help">Help & Settings</Link>
      <Link className="nav-btn" to="/auth">Login</Link>
    </nav>
  );
}