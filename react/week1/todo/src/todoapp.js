import React from "react";
//import ReactDOM from "react-dom";
const h2Css = {
  backgroundColor: "#2a9dbd",
  padding: "40px",
  borderRadius: "20px",
  border: "5px solid black",
};
const h1Css = {
  backgroundColor: "gold",
  width: "70%",
  marginLeft: "80px",
  padding: "30px",
  borderRadius: "20px",
};

function RenderTask({ task, task_date }) {
  return (
    <>
      <li>
        {
          <h2 style={h2Css}>
            <span style={{ color: "blue" }}>Task : </span>
            {task}
            <span style={{ color: "red", marginLeft: "20px" }}>
              Deadline :{task_date }
            </span>
            {task_date}
          </h2>
        }
      </li>
    </>
  );
}

//<h1>To do application</h1>
function ToDo(props) {
  return (
    <>
      <h1 style={h1Css}>To do application</h1>,
      <ul>
        {props.ToDoList1.map((oneTask) => {
          return (
            <RenderTask
              key={oneTask.id}
              task={oneTask.task}
              task_date={oneTask.deadline}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ToDo;
