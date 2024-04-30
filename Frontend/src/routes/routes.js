import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router";

import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

function RouteSystem() {
    return (
      <>
        <Router>
          <Routes>
            <Route element={<Login name="Login" />} path="/" />
            <Route element={<Dashboard name="Dashboard" />} path="/d" />
          </Routes>
        </Router>
      </>
    );
  }
  
  export default RouteSystem;