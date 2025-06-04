import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DevNavbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useUser } from "../../pages/Auth/UserContext";

export default function DevNavbar() {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have successfully logged out.");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("An error occurred while disconnecting.");
    }
  };

  return (
    <nav className="dev-navbar">
      <Link className="nav-btn" to="/">Home</Link>
      <Link className="nav-btn" to="/dashboard">Dashboard</Link>
      <Link className="nav-btn" to="/help">Help</Link>
      {!user ? (
        <Link className="nav-btn" to="/login">Login</Link>
      ) : (
        <button className="nav-btn logout-btn" onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
}