import React, { Component, useState, useEffect } from "react";
import "../assets/css/GlobalStyle.css";
// import components
import NavBar from "../components/menus/NavBar";
import AddForm from "../components/forms/AddForm";
import TodoList from "../components/lists/TodoList";

const Dashboard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  });

  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let myVar = JSON.parse(localStorage.getItem("todos"));
      setTodos(myVar);
    }
  };

  return (
    <>
      {/* <div>
        <NavBar isOpen={isOpen} toggle={toggle} />
      </div> */}
      <div className="container">
        <header>
          <h2>Todo List AOS</h2>
        </header>
        {/* Tasks List */}

        <TodoList todos={todos} setTodos={setTodos} />
        {/* Add task form */}
        <AddForm
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          saveLocalTodos={saveLocalTodos}
        />
      </div>
    </>
  );
};

export default Dashboard;
