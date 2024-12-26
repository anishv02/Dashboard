import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your components here
import BillGenerate from "./components/BillGenerate";
import LandingPage from "./pages/LandingPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/billGenerate" element={<BillGenerate />} />
    </Routes>
  );
};

export default AppRouter;
