import React, {useState} from 'react' 
import TodoForm from "./TodoForm"


function App() {
  const [todo, settodo] = useState("")

function insertTodo(t) {
  settodo([t,...todo])
}



  return (
    <div>
    <div className="App">
    Hello World This is a todo app</div>
    <TodoForm insertTodo ={insertTodo}/>
    </div>
  );
}

export default App;
