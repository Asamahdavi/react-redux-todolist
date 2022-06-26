import React from "react";
import ReactDOM from "react-dom";
import Todos from "./components/Todos";
import ShowTodos from "./components/ShowTodos";
import "./style/main.css";

function App() {
  return (
    <div className=" mt-24 flex flex-col">
      <h1 className=" inline text-center mb-16 text-3xl ">Todo App</h1>
      <Todos />
      <ShowTodos />
    </div>
  );
}

export default App;
