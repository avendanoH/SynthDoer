import React from 'react'
import styled from 'styled-components'
//import {Checkbox} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from "./Checkbox"
// create synthwave button, complete, line-through using the synth
// move stuff here to checkbox and make it work!


const Button = styled.button`
  background: #ff34b3;
  background-image: -webkit-linear-gradient(top, #ff34b3, #2980b9);
  background-image: -moz-linear-gradient(top, #ff34b3, #2980b9);
  background-image: -ms-linear-gradient(top, #ff34b3, #2980b9);
  background-image: -o-linear-gradient(top, #ff34b3, #2980b9);
  background-image: linear-gradient(to bottom, #ff34b3, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 0px;
  font-family: Courier New;
  color: #ffffff;
  font-size: 12px;
  padding: 5px 10px 5px 10px;
  text-decoration: none;
  vertical-align:middle;
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
            <label>
                <Checkbox
                checked={todo.isComplete}
                onClick={handleCompleteToggle}
                />
                <span style={{ 
                textDecoration: todo.isComplete ? "line-through" : null }}>
{todo.title}
                     </span>
                


             <Button onClick={handleRemClick}>X</Button>

            </label>
        </div>
    );
}
