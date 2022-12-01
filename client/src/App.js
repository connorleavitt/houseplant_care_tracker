import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Profiles from "./pages/Profiles";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profiles" element={<Profiles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
