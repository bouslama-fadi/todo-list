import React, { Component, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";

import AuthCard from "../components/cards/AuthCard";

const Authentification = () => {
  return (
    <div>
      {/* <Button variant="secondary">clickMe</Button> */}
      <div className="container">
        <div className="justify-content-center">
          <AuthCard />
        </div>
      </div>
      {/* <Button color="primary">clickMe</Button> */}
    </div>
  );
};

export default Authentification;
