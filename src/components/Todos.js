import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addTodos, deleteTodos, updateTodos,completeTodos } from "../redux/reducer";
import {GoPlus} from "react-icons/go";
const mapStateToProps = (state) => {
    return {
      todos: state,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (todoObj) => dispatch(addTodos(todoObj)),
      deleteTodo: (id) => dispatch(deleteTodos(id)),
      updateTodo: (todoObj) => dispatch(updateTodos(todoObj)),
      completeTodo: (id) => dispatch(completeTodos(id)),
    };
  };

const Todos = (props) => {
  // create use caseses for each todo
  const [todo, setTodo] = useState("");
 
  const handleChange = (e) => {
    setTodo(e);
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        className="todo-input w-96 h-10 border-none pt-2 pr-4  rounded-md focus:outline-none "
      />
      <button
        className="add-btn ml-4 flex justify-center items-center  rounded-full text-center text-2xl w-14 h-14 cursor-pointer focus:outline-none"
        onClick={(click) =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        <GoPlus/>
      </button> 
    </div>
  );
};
// use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);