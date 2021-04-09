import React, { Component, useState } from "react";
import { Form, Input, Button, ListGroup, ListGroupItem } from "reactstrap";

const AddForm = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  inputTextDesc,
  setInputTextDesc,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputTextDescHandler = (e) => {
    setInputTextDesc(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        description: inputTextDesc,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    // Reset the state
    setInputText("");
    setInputTextDesc("");
  };

  return (
    <div style={{ marginTop: 10 }}>
      <Form>
        <ListGroup>
          <ListGroupItem>
            <h4>Create new task</h4>
            <div className="customInput">
              <label className="form-control-label" htmlFor="name">
                Name
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                onChange={inputTextHandler}
                value={inputText}
                name="name"
              />
            </div>
            <div className="customInput">
              <label className="form-control-label" htmlFor="description">
                Description
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                onChange={inputTextDescHandler}
                value={inputTextDesc}
                name="description"
              />
            </div>
            <Button
              className="mt-2"
              color="primary"
              onClick={submitTodoHandler}
            >
              Confirm
            </Button>
          </ListGroupItem>
        </ListGroup>
      </Form>
    </div>
  );
};

export default AddForm;
