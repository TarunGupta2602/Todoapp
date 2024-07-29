// src/components/TodoList.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,removeTodo } from "../todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState(""); // State for input text

  const handleAddTodo = () => {
    if (taskText.trim()) {
      dispatch(addTodo({ id: Math.random(), text: taskText }));
      setTaskText(""); // Clear input after adding task
    }
  };

  const handleRemoveTodo = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  return (
    <div className="box">
      <input className="task-input"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a task..."
      />
      <button className="add-button" onClick={handleAddTodo}>Add Task</button>
      <div >
        {todos.map((todo) => (
          <div   key={todo.id}>
            {todo.text}
            <button className="remove-button" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
