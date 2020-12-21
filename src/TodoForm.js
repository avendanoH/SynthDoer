import React, {useState} from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
export default function TodoForm({insertTodo}) {

    const [currTodo, setcurrTodo] = useState({
        title:"",
        id:"",
        tag:"",
        timeDue:"",
        Completed: false
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(currTodo.title.trim){
            insertTodo({...currTodo,id: uuidv4()})
            setcurrTodo({...currTodo,title:''})
}
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type = "text" value = {currTodo.title} onChange={(e) => setcurrTodo(e.target.value)} />  {/* i have a feeling this may be wrong. are setting the state to just the value? */}
                <input type = "submit" value ="Insert Todo"></input>
            </form>
            <Todo todo={currTodo}/>
            
        </div>
    )
}
