import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";

import HomePage from "scenes/homePage/homePage";
import LoginPage from "scenes/loginPage/loginPage";
import UserProfilePage from "scenes/userProfilePage/userProfilePage";
// import NavbarPage from "scenes/navbar/navbarPage";
// import PlantProfilesPage from "scenes/plantProfilesPage/plantProfilesPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/user/:userId" element={<UserProfilePage />}></Route>
          {/* <Route path="/plant-profiles" element={<PlantProfilesPage />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
