import React, { Component, useState, useEffect } from "react";
import NavBar from "../components/menus/NavBar";
import Dashboard from "../views/Dashboard";
import EmptyComponent from "../views/EmptyComponent";
import Bienvenue from "../components/elements/Bienvenue";

const DashboardLayout = () => {
  const [activeView, setActiveView] = useState("");

  const navClickHandler = (e) => {
    if (e) {
      e.preventDefault();
    }
    setActiveView("1");
    console.log("teeeest " + activeView);
  };

  const navClickHandlerR2 = (e) => {
    if (e) {
      e.preventDefault();
    }
    setActiveView("2");
  };

  const navClickHome = (e) => {
    if (e) {
      e.preventDefault();
    }
    setActiveView("0");
  };
  return (
    <div>
      <NavBar
        navClickHome={navClickHome}
        navClickHandler={navClickHandler}
        navClickHandlerR2={navClickHandlerR2}
      />

      {activeView == "1" ? (
        <Dashboard />
      ) : (
        [activeView == "2" ? <EmptyComponent /> : <Bienvenue />]
      )}
    </div>
  );
};

export default DashboardLayout;
