import React from "react";
import './index.css'

function ToDoList(props) {
  return (
    <>
      <div className='listItems'>
        
        <li>{props.text}</li>
        <button onClick={()=>{props.onSelect(props.id)}}>Delete</button>

      </div>
    </>
  );
}

export default ToDoList;
