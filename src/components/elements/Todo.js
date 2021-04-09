import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem, Badge } from "reactstrap";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: true,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      {/* <h2>Task's list</h2> */}
      <ListGroup>
        <ListGroupItem>
          <div className="textContainer">{text}</div>
          <div className="buttonContainer">
            <Button color="primary" onClick={completeHandler}>
              Done
            </Button>
            <Button
              style={{ marginLeft: 5 }}
              color="danger"
              onClick={deleteHandler}
            >
              Delete
            </Button>
          </div>
          {todo.completed ? (
            <div className="badgeStyle">
              <Badge color="primary">Completed</Badge>
            </div>
          ) : (
            <div className="badgeStyle">
              <Badge color="danger">Not complete</Badge>
            </div>
          )}
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Todo;
