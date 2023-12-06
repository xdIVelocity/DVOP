/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";




function ToDoList() {
  
  const [toDoList, setState] = useState([]);
  const [toDoItem, setItem] = useState();
  function submitItem() {
    for (let i = 0; i < toDoList.length; i++) {
      if (toDoItem === toDoList[i]) {
        alert("Item already exists");
        return;
      }
    }
    /*for (let e = 0; e < toDoItem.length; e++) { 
      setItem(toDoItem){
        toDoItem = e + ". " + toDoItem 
      }
    }*/

    toDoList.push(toDoItem)
    console.log(toDoList)
    setItem()
  }
  return (
    <>
        <input className="input-field" type="text" value={toDoItem}
        onChange={(event) => {
          setItem(event.target.value);
        }}/>
        <button className="submit-button" onClick={submitItem} onChange={setState}>
          Submit
        </button>
        <div className="toDoList">
        {toDoList.map(list => (
          <h4  key={list}>{list}</h4>
        ))}
        
        </div>
        
    </>
    
  );
}

export default ToDoList;

