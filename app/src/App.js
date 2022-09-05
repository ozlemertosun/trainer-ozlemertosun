import "./App.css";
import Welcome from "./assets/pages/Welcome";
import Home from "./assets/pages/Home";
import Classes from "./assets/components/Classes";
import Search from "./assets/pages/Search";
import { Route, Routes } from "react-router-dom";
import Navigation from "./assets/components/Navigation";
import MyShedule from "./assets/pages/MySchedule";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/search" element={<Search />} />
        <Route path="/schedule" element={<MyShedule />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
