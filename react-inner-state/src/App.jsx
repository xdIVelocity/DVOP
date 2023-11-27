import { useState } from "react";
import "./App.css";
import ToDoList from "./state";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ToDoList/>
        <p>You should do the following</p>
    </>
  );
}

export default App;
