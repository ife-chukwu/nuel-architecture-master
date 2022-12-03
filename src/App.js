import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import { HireUs } from "./pages/HireUs";

const App = () => {
  const [lightDark, setLightDark] = useState(true);
  const toggleMode = () => {
    setLightDark((current) => !current);
  };

  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar((current) => !current);
  };

  const switchClose = () => {
    setShowNavbar(false);
  };

  return (
    <div
      className={`${
        lightDark ? "bg-[#F5F5F5]" : "bg-[#121212]"
      } transition ease-in-out delay-1000`}
    >
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              lightDark={lightDark}
              toggle={toggleMode}
              showNavbar={showNavbar}
              toggleNavbar={toggleNavbar}
              switchClose={switchClose}
            />
          }
        />
        <Route
          path="AboutUs"
          element={
            <AboutUs
              lightDark={lightDark}
              toggle={toggleMode}
              showNavbar={showNavbar}
              toggleNavbar={toggleNavbar}
              switchClose={switchClose}
            />
          }
        />
        <Route
          path="hireUs"
          element={
            <HireUs
              lightDark={lightDark}
              toggle={toggleMode}
              showNavbar={showNavbar}
              toggleNavbar={toggleNavbar}
              switchClose={switchClose}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
