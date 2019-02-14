import React from 'react';
import './Todo.css'

const Todo = props =>{
    return (
        <div className="one-todo" onclick={() =>props.toggleTask(props.todoItem.id)}>
            <h3>{props.taskItemArray.task}</h3>
        </div>
    )
}

export default Todo;

