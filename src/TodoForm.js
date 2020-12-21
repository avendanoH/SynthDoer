import React, {useState} from 'react'

export default function TodoForm(todo) {

    const [currTodo, setcurrTodo] = useState({
        title:"",
        ID:"",
        tag:"",
        timeDue:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(currTodo)
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type = "text" value = {currTodo.title} onChange={(e) => setcurrTodo(e.target.value)} />  {/* i have a feeling this may be wrong. are setting the state to just the value? */}
                <input type = "submit" value =""></input>
            </form>
            
        </div>
    )
}
