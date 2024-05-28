import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  let inputValue = useRef(null);
  let [todoList, setTodos] = useState([]); // maintains list of added list items
  function addTodo() {
    console.log("Todo");
    console.log(inputValue.current.value);
    const updatedTodos = [...todoList, inputValue.current.value]; // adds new todo to existing todolist , you need to create a new temp array and then setTodo
    setTodos(updatedTodos);
    inputValue.current.value = null;
  }

  function deleteRecord(record) {
    console.log(record);
    record = "abcd";
    const updatedTodos = todoList.filter((value) => value !== record); // find record that matches that name and remove that record from todo
    setTodos(updatedTodos);
  }

  return (
    <>
      <div className="App-header">
        <input type="text" ref={inputValue} name="add" id="add" />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todoList.map((response) => (
          <li key={response}>
            <input type="checkbox" onClick={deleteRecord} />
            {response}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
