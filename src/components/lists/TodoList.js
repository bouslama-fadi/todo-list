import React, { Component } from "react";
// import components
import Todo from "../elements/Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <h4>Tasks list</h4>
      {todos.map((todo) => (
        <Todo
          text={todo.text}
          description={todo.description}
          key={todo.id}
          setTodos={setTodos}
          todos={todos}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
