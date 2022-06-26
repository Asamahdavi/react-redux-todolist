import React, { useRef } from "react";

const TodoItem = (props) => {
  const { task, completeTodo, deleteTodo, updateTodo } = props;
  const inputRef = useRef(true);
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const updateTask = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li key={task.id}>
      <textarea
        ref={inputRef}
        disavled={inputRef}
        defaultValue={task.item}
        onKeyPress={(e) => updateTask(task.id, inputRef.current.value, e)}
      />
      <div>
        <button onClick={() => completeTodo(task.id)}>complete</button>
        <button onClick={() => changeFocus()}>edit</button>
        <button onClick={() => deleteTodo(task.id)}>delete</button>
      </div>
      {task.completed && <span> "completed"</span>}
    </li>
  );
};
export default TodoItem;