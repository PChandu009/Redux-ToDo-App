import React, { Component } from 'react';
import CreateTodo from './components/create-todo'
import TodosListHeader from './components/todos-list-header2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
          <h1>ToDo with Redux</h1>
          <CreateTodo/>
          <TodosListHeader/>
      </div>
    );
  }
}

export default App;
