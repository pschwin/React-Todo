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

class TodoList extends React.Component{
   constructor(){
      super ();
      this.state = {
         todos: todos,
         task: '',
         id: '',
         completed: ''
      };
   }

   addToDo = event =>{
      event.preventDefault();
      console.log(event.target);

      const newToDo ={
         task: this.state.task,
         id: this.state.id,
         completed: this.state.completed
      };


   }

   render() {
      return(
         <div>
            <h1>To-Do List MVP</h1>
            <div className="to-do-list">
            this.state ..
            </div>
         </div>
      )
   }
}

export default todoList;