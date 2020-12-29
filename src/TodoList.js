import React from 'react'
import Todo from './Todo'
import styled from 'styled-components'

export default function TodoList({todo,removeTodo,toggleIsComplete}) {
    return (
    <ul>
        {todo.map(t =>(
            <Todo key ={t.id} todo={t} removeTodo={removeTodo} toggleIsComplete={toggleIsComplete}/>
        ))}
    </ul>  
    );
}
