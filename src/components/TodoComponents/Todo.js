import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';

const Todo = props => {
    return (
        <div className="todo-card">
        <h3>Task: </h3>
        <p>ID: </p>
        <p>Comleted: </p>
        </div>
    )
}

export default Todo;

