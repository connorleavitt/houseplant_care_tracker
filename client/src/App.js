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
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";

//SCENES
import HomePage from "scenes/homePage/homePage";
import LoginPage from "scenes/loginPage/loginPage";
import UserProfilePage from "scenes/userProfilePage/userProfilePage";
import UpdateUserProfilePage from "scenes/userProfilePage/updateUserProfilePage";
import PlantProfilesPage from "scenes/plantProfilesPage/plantProfilesPage";
import CreatePlantProfilePage from "scenes/plantProfilesPage/createPlantProfilePage";
import SpecificPlantProfilePage from "scenes/plantProfilesPage/specificPlantProfilePage";
import UpdatePlantProfilePage from "scenes/plantProfilesPage/updatePlantProfilePage";
import WateringPage from "scenes/wateringPage/wateringPage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Routes>
              <Route path="/" element={<LoginPage />}></Route>
              <Route
                path="/home"
                element={isAuth ? <HomePage /> : <Navigate to="/" />}
              />
              <Route
                path="/user/account"
                element={isAuth ? <UserProfilePage /> : <Navigate to="/" />}
              ></Route>
              <Route
                path="/user/account/edit"
                element={
                  isAuth ? <UpdateUserProfilePage /> : <Navigate to="/" />
                }
              ></Route>
              <Route
                path="/plant-profiles"
                element={isAuth ? <PlantProfilesPage /> : <Navigate to="/" />}
              ></Route>
              <Route
                path="/plant-profiles/create"
                element={
                  isAuth ? <CreatePlantProfilePage /> : <Navigate to="/" />
                }
              ></Route>
              <Route
                path="/plant-profiles/:userId/:id"
                element={
                  isAuth ? <SpecificPlantProfilePage /> : <Navigate to="/" />
                }
              ></Route>
              <Route
                path="/plant-profiles/:userId/:id/edit"
                element={
                  isAuth ? <UpdatePlantProfilePage /> : <Navigate to="/" />
                }
              ></Route>
              {/* <Route
                path="/watering"
                element={isAuth ? <WateringPage /> : <Navigate to="/" />}
              /> */}
            </Routes>
          </LocalizationProvider>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
