import React from 'react'
import styled from 'styled-components'

// create synthwave button, complete, line-through using the synthw


const Button = styled.button`
  background: #ff34b3;
  background-image: -webkit-linear-gradient(top, #ff34b3, #2980b9);
  background-image: -moz-linear-gradient(top, #ff34b3, #2980b9);
  background-image: -ms-linear-gradient(top, #ff34b3, #2980b9);
  background-image: -o-linear-gradient(top, #ff34b3, #2980b9);
  background-image: linear-gradient(to bottom, #ff34b3, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Courier New;
  color: #ffffff;
  font-size: 12px;
  padding: 5px 10px 5px 10px;
  text-decoration: none;

  &:hover {
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #ff34b3);
    background-image: -moz-linear-gradient(top, #3cb0fd, #ff34b3);
    background-image: -ms-linear-gradient(top, #3cb0fd, #ff34b3);
    background-image: -o-linear-gradient(top, #3cb0fd, #ff34b3);
    background-image: linear-gradient(to bottom, #3cb0fd, #ff34b3);
    text-decoration: none;
}`;


export default function Todo({ todo, removeTodo, toggleIsComplete }) {
    function handleRemClick() { removeTodo(todo.id) }

    function handleCompleteToggle() { toggleIsComplete(todo.id) }

    return (
        <div style={{ display: "flex" }}>
            <input type="checkbox" onClick={handleCompleteToggle} />
            <li
                style={{
                    textDecoration: todo.isComplete ? "line-through" : null
                }}

            >
                {todo.title}

            </li>
            <Button onClick={handleRemClick}>Remove</Button>
        </div>
    );
}
