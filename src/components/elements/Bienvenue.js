import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

const Bienvenue = () => {
  return (
    <div className="container mt-5">
      <Jumbotron>
        <h4 className="display-3">Welcome</h4>
        <p className="lead">this is AOS todo list application :D</p>
      </Jumbotron>
    </div>
  );
};

export default Bienvenue;
