import React, {useState} from 'react' 
import TodoForm from "./TodoForm"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, settodo] = useState("")

function insertTodo(title) {
  settodo([...todo,{title:title, id:uuidv4() }])
}



  return (
    <div>
    <div className="App">
    Hello World This is a todo app</div>
    <TodoForm todo={todo} insertTodo ={insertTodo}/>
    </div>
  );
}

export default App;
