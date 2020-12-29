import React from 'react'

export default function Todo({todo,removeTodo,toggleIsComplete}) {
    function handleRemClick(){removeTodo(todo.id)}

    function handleCompleteToggle(){ toggleIsComplete(todo.id)}
    
    return (
        <div style={{display: "flex"}}>
            <input type="checkbox" onClick={handleCompleteToggle}/>
            <li
                style={{
                    color:'white',
                    textDecoration: todo.toggleIsComplete ? "line-through" : null
                }}

                >
                    {todo.title}

                    </li>
                    <button onClick={handleRemClick}>X</button> 
            </div>
    );
}
