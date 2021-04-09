import React, { Component, useState } from "react";
import { Form, Input, Button, ListGroup, ListGroupItem } from "reactstrap";

const AddForm = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    // Reset the state
    setInputText("");
  };

  return (
    <div style={{ marginTop: 10 }}>
      <Form>
        <ListGroup>
          <ListGroupItem>
            <h4>Create new task</h4>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={inputTextHandler}
              value={inputText}
            />
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
