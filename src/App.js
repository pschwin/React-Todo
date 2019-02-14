import React from 'react';
import TaskForm from './components/TodoComponents/TaskForm';
import TaskList from './components/TodoComponents/TaskList';

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

  render(){
    return(
      <div>
        <h1>MVP</h1>
        <TaskList todos={this.state.todos} />
        <TaskForm addItem = {this.addItem}/>
      </div>
    )
  }
}

export default App;








