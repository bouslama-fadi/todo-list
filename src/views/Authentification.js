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
      <div className="container">
        <div className="justify-content-center">
          <AuthCard />
        </div>
      </div>
    </div>
  );
};

export default Authentification;
