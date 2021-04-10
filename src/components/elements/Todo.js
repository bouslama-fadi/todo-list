import React, { Component, useState } from "react";
import { Button, ListGroup, ListGroupItem, Badge } from "reactstrap";

import DeleteTaskModal from "../modals/DeleteTaskModal";

const Todo = ({ text, description, todo, todos, setTodos }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
          <div className="textContainer">
            <strong>{text} :</strong> {description}
          </div>

          <div className="buttonContainer">
            <Button color="primary" onClick={completeHandler}>
              Done
            </Button>
            <Button
              style={{ marginLeft: 5 }}
              color="danger"
              // onClick={deleteHandler}
              onClick={toggle}
            >
              Delete
            </Button>
            <DeleteTaskModal
              modal={modal}
              toggle={toggle}
              deleteHandler={deleteHandler}
            />
          </div>
          {todo.completed ? (
            <div className="badgeStyle">
              <Badge color="success">Completed</Badge>
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
