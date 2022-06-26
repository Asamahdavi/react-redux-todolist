import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  deleteTodos,
  updateTodos,
  completeTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

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

const ShowTodos = (props) => {
  const[sort, setSort] = useState("In Progress");

  return (
    <div>
      <div className="">
        <button onClick={() => setSort("In Progress")}>In Progress</button>
        <button onClick={() => setSort("Completed")}>Completed</button>
        <button onClick={() => setSort("All")}>All</button>
      </div>
      <ul>
        {props.todos.length > 0 && sort === "In Progress"
          ? props.todos.map((task) => {
              return (
                task.completed === false && (
                  <TodoItem
                    key={task.id}
                    task={task}
                    deleteTodo={props.deleteTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {props.todos.length > 0 && sort === "Completed"
          ? props.todos.map((task) => {
              return (
                task.completed === true && (
                  <TodoItem
                    key={task.id}
                    task={task}
                    deleteTodo={props.deleteTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {props.todos.length > 0 && sort === "All"
          ? props.todos.map((task) => {
              return (
                <TodoItem
                  key={task.id}
                  task={task}
                  deleteTodo={props.deleteTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);