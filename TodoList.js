import React from 'react'
import Todo from './Todo'
import styled from 'styled-components'

const Bulletless = styled.ul`
list-style-type: none;
`;


export default function TodoList({todo,removeTodo,toggleIsComplete}) {
    return (
    <Bulletless>
        {todo.map(t =>(
            <Todo key ={t.id} todo={t} removeTodo={removeTodo} toggleIsComplete={toggleIsComplete}/>
        ))}
    </Bulletless>  
    );
}
