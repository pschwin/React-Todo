import React from 'react';
import Todo from './Todo';

const TaskList = props =>{
    return (
        <div>
            
            {props.todos.map(todoItem =>(
                <Todo taskItemArray ={todoItem} />
            ))}

        </div>     
    )
}

export default TaskList;