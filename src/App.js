import React from "react";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppRouter from "./AppRouter";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
