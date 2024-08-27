// src/ToDo.js

import React from 'react';
import './App.css';

const ToDo = ({ todo, toggleComplete, removeToDo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.text}</span>
      <div className="actions">
        <button onClick={() => toggleComplete(todo.id)}>Complete</button>
        <button onClick={() => removeToDo(todo.id)}>Remove</button>
      </div>
    </div>
  );
};

export default ToDo;
