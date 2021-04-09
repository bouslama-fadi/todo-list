import React, { Component, useState } from "react";
import NavBar from "../components/menus/NavBar";

const Dashboard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <NavBar isOpen={isOpen} toggle={toggle} />
      </div>
    </>
  );
};

export default Dashboard;
