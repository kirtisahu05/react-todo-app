import React from 'react'
import PropTypes from 'prop-types'
import Icon from "../components/Icon"
import './ComponentsStyle.css'

const Todo = ({ onClick, completed, text, moveUp, moveDown }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span className="cursor-pointer" onClick={onClick}>
      <Icon color={ completed ? '#0082d4' : '#8b9da7' } size={15} icon={ completed ? 'checked' : 'not-checked' } />
    </span>
    <span className="ml-10 vertical-align-middle">
      {text}
    </span>
    <span className="reorder-actions">
      <span className="cursor-pointer moveUp" onClick={moveUp}>
        <Icon color="#0082d4" size={15} icon="arrow-up2" />
      </span>
      <span className="ml-10 cursor-pointer moveDown" onClick={moveDown}>
        <Icon color="#0082d4" size={15} icon="arrow-down2" />
      </span>
    </span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
}

export default Todo