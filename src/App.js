import React, { useState, useEffect } from 'react'
import TodoForm from "./TodoForm"
import TodoList from './TodoList'
import "./App.css";


function App() {
  const curr = new Date()
  const date = `${curr.getDate()}/${curr.getMonth()+1}/${curr.getFullYear()}`;
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem('todo'));
    if (storedTodo) { setTodo(storedTodo) }
  }, [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  function insertTodo(t) {
    setTodo([t, ...todo]);
  }

  function removeTodo(id) { setTodo(todo.filter(t => t.id !== id)) }

  function toggleIsComplete(id) {
    setTodo(
      todo.map(t => {
        if (t.id === id) {
          return {
            ...t,
            isComplete: !t.isComplete
          };
        }
        return t
      })
    );
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>{date}</p>
        <p>Your Todo List</p>
        <TodoForm insertTodo={insertTodo} />
        <TodoList
          todo={todo}
          removeTodo={removeTodo}
          toggleIsComplete={toggleIsComplete} />
      </header>
    </div>
  );
}
export default App;
