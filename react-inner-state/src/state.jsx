import { useState } from "react";
import "./App.css";

function ToDoList() {
    let toDoList = [];
  const [toDoItem, submitItem] = useState();
  return (
    <>
        <input className="input-field" type="text" value={toDoItem}/>
        <button className="submit-button" onClick={() => submitItem((toDoItem) => toDoItem)}>
          Submit
        </button>
    </>
  );
}

export default ToDoList;
