import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import './ComponentsStyle.css'

const TodoList = ({ incompletedTodos, completedTodos, toggleTodo, moveUp, moveDown }) => (
  <div className="listContainer">
    <span>
      <span className="heading">To-do</span>
      <ul>
        {incompletedTodos?.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
            moveUp={() => moveUp(todo.id)}
            moveDown={() => moveDown(todo.id)}
          />
        )}
      </ul>
    </span>
    <span>
      <span className="heading">Completed</span>
      <ul>
        {completedTodos?.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
            moveUp={() => moveUp(todo.id)}
            moveDown={() => moveDown(todo.id)}
          />
        )}
      </ul>
    </span>
  </div>
)

TodoList.propTypes = {
  incompletedTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  completedTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired
}

export default TodoList