import React from "react";

import DashbordNavbar from "../navbar";
import Topbar from "../topbar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <DashbordNavbar />
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Topbar />

        {/* Main Content */}
        <div style={{ marginTop: "80px" }}>
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
