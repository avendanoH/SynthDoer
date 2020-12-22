import React from 'react'

export default function Todo({todo,removeTodo}) {
    function handleClick(id){
        removeTodo(todo.id)
    }
    return (
            <li>{todo.title} <button onClick={handleClick}>X</button></li>

    )
}
