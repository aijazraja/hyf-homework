import React, { useState } from "react";
import "./index.css";
import ToDoList from './ToDoList'
import Timer from './Timer.js'

function App() {
  const[inputlist,setInputList]=useState();
  const[items,setItems]= useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);

  }

  const lisOfItems=()=>{
    setItems((oldItem)=>{
      return[...oldItem,inputlist];
      
    });
    setInputList('');
  }

  const deleteItems=(id)=>{
  
    
    setItems((oldItem)=>{
      return oldItem.filter((arrElement, index)=>{
              return index!==id;
            });
          });
  }

  return (
    <>
      
      <div >
        <br />
        <h1>Todolist</h1>
        <br />
        <Timer />
        <br />
        <input type="text" placeholder="Add a todo" onChange={itemEvent} />
        <button onClick={lisOfItems}>+</button> 
        
        <ol>
          {items.length > 0 ?
          items.map((itemVal,index)=>{
            return <ToDoList key={index} id={index} text={itemVal} onSelect={deleteItems}/>
          }): 'No items'}
        </ol>
      </div>
    </>
  );
}

export default App;
