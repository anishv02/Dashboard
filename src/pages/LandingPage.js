import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/LandingPage.css";
import CardClicks from "../components/CardClicks";

const LandingPage = () => (
  <div className="landing-page">
    <div className="header">
      <Header />
    </div>
    <div className="content">
      <div>
        <Sidebar />
      </div>
      <div className="cards">
        <CardClicks />
      </div>
    </div>
  </div>
);

export default LandingPage;
