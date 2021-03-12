import React, { useState } from "react";
import "./index.css";
import Border from "./Border";

function ToDoList(props) {
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(props.text);
  const [checkState, setcheckState] = useState(false);
  return (
    <Border>
      <div className="listItems">
        <li className={checkState ? "checkedline" : ""}>
          {!edit && <>Task : {description} </>}
          {edit && (
            <input
              type="text"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          )}
          , Deadline : {props.deadline}
          <input
            type="checkbox"
            checked={checkState}
            onChange={() => {
              setcheckState(!checkState);
            }}
          />
          <button
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            Delete
          </button>
          {!edit && <button onClick={() => setEdit(!edit)}>Edit</button>}
          {edit && (
            <button
              onClick={() => {
                setEdit(!edit);
                props.onUpdate(props.id, description);
              }}
            >
              Update
            </button>
          )}
        </li>
      </div>
    </Border>
  );
}

export default ToDoList;
