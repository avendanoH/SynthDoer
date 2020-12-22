import React, {useState} from 'react' 
import TodoForm from "./TodoForm"
import TodoList from './TodoList'


function App() {
  const [todo, setTodo] = useState([]);

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
