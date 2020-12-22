import React, {useState,useEffect} from 'react' 
import TodoForm from "./TodoForm"
import TodoList from './TodoList'


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



    return (
      <div>
      <div className="App"> Hello World This is a todo app</div>
      <TodoForm insertTodo ={insertTodo}/>
      <TodoList todo={todo}/>
      </div>
    );
}
export default App;
