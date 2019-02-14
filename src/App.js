import React from 'react';
import TaskForm from './components/TodoComponents/TaskForm';
import TaskList from './components/TodoComponents/TaskList';
import './App.css';

const todos = [
  {
  task: 'Learn React',
  id: Date.now(),
  completed: false
  },

  {
  task: 'Eat',
  id: Date.now(),
  completed: false
  },

  {
  task: 'Sleep',
  id: Date.now(),
  completed: false
  },

  {

  task: 'Learn React',
  id: Date.now(),
  completed: false

  },

];

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos
    };
  }

  addItem = (event, item) => {
    event.preventDefault();
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTask]
    });
  }

  toggleTask = itemId =>{
    this.setState({
      todos: this.state.todos.map(item =>{
        if(itemId === item.id){
          return {...item, completed: !item.completed}
        }

        return item;
      })
    })
  }

  render(){
    return(
      <div className="app-container">
        <h1>MVP</h1>
        <div className="task-list">
          <TaskList 
          todos={this.state.todos} 
          toggleTask={this.toggleTask}
          />
        </div>
        <TaskForm addItem = {this.addItem}/>
      </div>
    )
  }
}

export default App;








