import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      navigate("/login");
      return;
    }

    try {
      const userData = JSON.parse(currentUser);
      setUser(userData);
    } catch (error) {
      console.error("Error parsing user data", error);
      localStorage.removeItem("currentUser");
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.username}!</h2>

      <div className="dashboard-content">
        <p>You are now logged in to your dashboard.</p>
        <p>This is a secure area available only to authenticated users.</p>
      </div>
    </div>
  );
};

export default Dashboard;
