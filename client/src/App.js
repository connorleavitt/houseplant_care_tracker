import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PlantProfiles from "./pages/PlantProfiles";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/plant-profiles" element={<PlantProfiles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
