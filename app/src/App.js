import "./App.css";
import { Route, Routes } from "react-router-dom";
//pages
import Welcome from "./assets/pages/Welcome";
import Home from "./assets/pages/Home";
import Search from "./assets/pages/Search";
import ClassDetails from "./assets/pages/ClassDetails";
import MyShedule from "./assets/pages/MySchedule";
//components
import Navigation from "./assets/components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/schedule" element={<MyShedule />} />
        <Route path="/class/:id" element={<ClassDetails />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
