import React from 'react'
import AddTodo from '../containers/AddTodo'
import ListTodos from '../containers/ListTodos'
import './ComponentsStyle.css';

const App = () => (
  <div className="conatiner">
    <AddTodo />
    <ListTodos />
  </div>
)

export default App