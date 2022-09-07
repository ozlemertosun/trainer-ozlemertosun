import "./App.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
//pages
import Welcome from "./assets/pages/Welcome";
import Home from "./assets/pages/Home";
import Search from "./assets/pages/Search";
import ClassDetails from "./assets/pages/ClassDetails";
import MyShedule from "./assets/pages/MySchedule";
import Login from "./assets/pages/Login";
//components
import Navigation from "./assets/components/Navigation";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Navigation />}

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/schedule" element={<MyShedule />} />
        <Route path="/class/:id" element={<ClassDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
