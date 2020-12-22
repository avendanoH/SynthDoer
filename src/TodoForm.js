import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
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
                <input type="submit" value="Insert Todo"></input>
            </form>
    )
}
