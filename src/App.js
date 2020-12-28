import React, {useState,useEffect} from 'react' 
import TodoForm from "./TodoForm"
import TodoList from './TodoList'
import "./App.css"


function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem('todo'));
    if (todo){setTodo(todo)}
  }, [])

  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(todo));
  }, [todo]);

  function insertTodo(t) {
    setTodo([t,...todo]);
  }

  function removeTodo(id){ setTodo(todo.filter(t=>t.id !== id))}

  function toggleIsComplete(id){
    setTodo(
      todo.map(t=>{
      if (t.id === id){
        return{...t,isComplete:!t.isComplete
        };
      }
        return t
      })
    );
  }


    return (
      <div>
      <div className="App"> Hello World This is a todo app</div>
      <TodoForm insertTodo ={insertTodo}/>
      <TodoList 
        todo={todo}
        removeTodo={removeTodo}
        toggleIsComplete={toggleIsComplete}/>
      </div>
    );
}
export default App;
