import React, { useState, useEffect } from 'react'
import TodoForm from "./TodoForm"
import TodoList from './TodoList'
import "./App.css";
import styled from 'styled-components'
import synthBackground from "./synth-skyline.mp4"  
import ReactPlayer from "react-player"




function App() {
  //const resonance = new Audio(Resonance)
  //const playResonance = () =>{resonance.play()}
  
  
  const curr = new Date()
  const date = `${curr.getMonth()+1}/${curr.getDate()}/${curr.getFullYear()}`;
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
      {/* <ReactAudioPlayer src={Resonance} autoPlay loop controls /> */}
      <ReactPlayer width={320} height={180} url = 'https://soundcloud.com/heriberto-avendano-870485699/sets/synthwave'/>
      <header className="App-header">
      <video
      style={{
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        height:'140%',
        objectFit: 'cover',
        transform: 'translate(-50%,-50%)',
        zIndex: '-2'
      }}
        autoPlay
        loop
        muted>
        <source src = {synthBackground} type="video/mp4"/>
      </video>
       <h1 style={{}}>SynthDoer</h1> 
        <p>{date}</p>
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
