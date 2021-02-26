import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import ToDo from "./todoapp";
const ToDoList = [
  {
    id: 1,
    task: "Get out of bed",
    deadline: "2021-02-28",
  },
  {
    id: 2,
    task: "Brush Teeth",
    deadline: "2021-02-28",
  },
  {
    id: 3,
    task: "Eat breakfast",
    deadline: "2021-02-28",
  },
];

ReactDOM.render(
  <>
    <ToDo ToDoList1={ToDoList} />,
  </>,

  document.getElementById("root")
);


