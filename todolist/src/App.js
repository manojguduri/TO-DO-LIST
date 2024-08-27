// src/App.js

import React, { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (text) => {
    const newToDo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([newToDo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <ToDoForm addToDo={addToDo} />
      <div>
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeToDo={removeToDo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
