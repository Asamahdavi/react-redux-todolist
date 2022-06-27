import React, { useRef } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDoneOutline } from "react-icons/md";
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
    <li key={task.id} className="card flex flex-col h-40 w-80 rounded-lg p-4 ">
      <textarea
        className=" p-2 rounded-lg  border-none h-4/5"
        ref={inputRef}
        disavled={inputRef}
        defaultValue={task.item}
        onKeyPress={(e) => updateTask(task.id, inputRef.current.value, e)}
      />
      <div className="btn">
        <button onClick={() => completeTodo(task.id)}>
          <MdOutlineDoneOutline />
        </button>
        <button onClick={() => changeFocus()}>
          <AiOutlineEdit />
        </button>
        <button onClick={() => deleteTodo(task.id)}>
          <AiOutlineDelete />
        </button>
      </div>
      {task.completed && <span> "completed"</span>}
    </li>
  );
};
export default TodoItem;
