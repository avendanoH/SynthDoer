import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

const Input = styled.input`
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
}
`;



export default function TodoForm({ insertTodo }) {

    const [currTodo, setcurrTodo] = useState({
        title: "",
        id: "",
        tag: "",
        timeDue: "",
        isComplete: false
    });

    function handleChange(e) {
        setcurrTodo({ ...currTodo, title: e.target.value })
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (currTodo.title.trim()) {
            insertTodo({ ...currTodo,id: uuidv4() })
            setcurrTodo({ ...currTodo, title:"" });
        }
    }



    return (
            <form onSubmit={handleSubmit}>
                <input type="text" value={currTodo.title} onChange={handleChange} />
                <Input type="submit" value="Do it"></Input>
            </form>
    )
}
