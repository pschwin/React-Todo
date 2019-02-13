// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [
    {
       task: 'Learn React',
       id: Date.now(),
       completed: false 
    },

    {
        task: 'Dream About React',
        id: Date.now(),
        completed: false 
     },

     {
        task: 'React to Fear',
        id: Date.now(),
        completed: false 
     },

     {
        task: 'Get a Job',
        id: Date.now(),
        completed: false 
     }
];



export default TodoList;