import React from "react";
import {
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet
} from 'react-router-dom';
import Home from "./pages/Home/Home";
import BMI from "./pages/BMI/BMI";
import PPM from "./pages/PPM/PPM";
import Menu from "./components/Menu/Menu";
import CPM from "./pages/CPM/CPM";
import "./scss/main.scss";

const NotFound = () => <h1 style={{margin: "0 auto", color: "crimson"}}>error 404 - page not found</h1>

function App() {
  return (
      <div>
            <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="BMI" element={<BMI />} />
          <Route path="PPM" element={<PPM />} />
          <Route path="CPM" element={<CPM />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  );
}

export default App;
