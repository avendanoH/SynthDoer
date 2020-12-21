import React, {useState} from 'react'

export default function TodoForm({todo, insertTodo}) {

    const [currTodo, setcurrTodo] = useState({
        title:"",
        id:"",
        tag:"",
        timeDue:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        insertTodo(currTodo)
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type = "text" value = {currTodo.title} onChange={(e) => setcurrTodo(e.target.value)} />  {/* i have a feeling this may be wrong. are setting the state to just the value? */}
                <input type = "submit" value ="Insert Todo"></input>
            </form>
            
        </div>
    )
}
