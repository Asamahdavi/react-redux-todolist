import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addTodos, deleteTodos, updateTodos,completeTodos } from "../redux/reducer";

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
    <div className=" ">
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        className=""
      />
      <button
        className=""
        onClick={(click) =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button> 
    </div>
  );
};
// use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);