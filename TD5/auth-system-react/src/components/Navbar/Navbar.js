import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("currentUser");
  const user = isLoggedIn
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/N7-logo-fr.png" alt="N7 Logo" />
      </div>
      <nav>
        {!isLoggedIn ? (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <span className="welcome-text">Welcome, {user.username}</span>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="#">Products</Link>
            <Link to="#">Upload File</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
