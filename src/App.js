//import logo from './logo.svg';
//import {hot} from 'react-hot-loader'; //This is automatically refreshing
import './App.css';
import React from 'react';
import TodoList from './todos/TodoList';
// import NewTodoForm from './todos/NewTodoForm';
// import TodoListItem from './todos/TodoListItem';

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
//export default hot(module)(App); //This is automatically refreshing


// The below line is used for automatically refreshing, it should be added in package.json scripts
// the browser  when changes are made to any file in the src directory of this project.