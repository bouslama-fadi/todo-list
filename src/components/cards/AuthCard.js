import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
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
  CardFooter,
  FormFeedback,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import ConnectButton from "../buttons/ConnectButton";

const AuthCard = () => {
  const [username, setUserName] = useState("test@test.com");
  const [password, setPassword] = useState("test");
  const { handleSubmit } = useForm();
  const history = useHistory();

  const updateUsername = (event) => {
    setUserName(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitData = () => {
    if (username == "test" && password == "test") {
      console.log("Success");
      history.push("/dashboard");
    } else {
      console.log("error");
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>Login from - To List Application</CardHeader>
        <CardBody>
          <Form role="form">
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <div className="pl-lg-8">
                  <FormGroup>
                    <label
                      className="form-control-label text-md-right"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <Input
                      className="form-control-alternative"
                      placeholder="This is my username"
                      name="username"
                      type="text"
                      onChange={updateUsername}
                    />
                    {/* {errors.username && (
                      <FormFeedback>Champ obligatoire</FormFeedback>
                    )} */}
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <div className="pl-lg-8">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="password">
                      Password
                    </label>
                    <Input
                      className="form-control-alternative"
                      placeholder="This is my password"
                      name="password"
                      type="password"
                      onChange={updatePassword}
                    />
                  </FormGroup>
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>
        <CardFooter>
          <Row>
            <Col sm="6" md={{ size: 8, offset: 2 }}>
              <ConnectButton onSubmitData={onSubmitData} />
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthCard;
