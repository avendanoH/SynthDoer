import React, {useState} from 'react' 
import TodoForm from "./TodoForm"

function App() {
  const [todo, settodo] = useState("")


  return (
    <div>
    <div className="App">
    Hello World This is a todo app</div>
    <TodoForm todo={todo}/>
    </div>
  );
}

export default App;
