import React, { useState, useEffect } from "react";

import "./App.css";
import Timer from "./Timer.js";
import ToDoList from "./ToDoList";

function App() {
  const [inputlist, setInputList] = useState({
    description: "",
    deadline: "",
  });
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((response) => response.json())
      .then((apitodos) => {
        const currentTodos = [...todos].concat(apitodos);
        setTodos(currentTodos);
      });
  }, []);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    //console.log(name, value);
    setInputList({ ...inputlist, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((oldItem) => {
      return [...oldItem, inputlist];
    });
    /* const newTodo = { ...inputlist};
    setTodos([...todos, newTodo]); */
    setInputList({ description: "", deadline: "" });
  };
  const deleteItems = (id) => {
    setTodos((oldItem) => {
      return oldItem.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  const updateItem = (id, description) => {
    const oldTodos = [...todos];
    const currentTodos = oldTodos.map((todo) => {
      if (todo.id == id) {
        todo.description = description;
      }
      return todo;
    });

    setTodos(currentTodos);
  };
  return (
    <div>
      <h1>Todoapp with date</h1>
      <Timer />
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Todo Desscription </label>
          <input
            type="text"
            onChange={handleInput}
            autoComplete="off"
            name="description"
            value={inputlist.description}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="deadline">Deadline </label>
          <input
            type="date"
            onChange={handleInput}
            autoComplete="off"
            name="deadline"
            id="myDate"
            value={inputlist.deadline}
            required
          ></input>
        </div>
        <br />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        <div>
          <ol>
            {todos.length > 0
              ? todos.map((todo, index) => {
                  return (
                    <ToDoList
                      key={index}
                      id={index}
                      text={todo.description}
                      deadline={todo.deadline}
                      onSelect={deleteItems}
                      onUpdate={updateItem}
                    />
                  );
                })
              : "No items"}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
