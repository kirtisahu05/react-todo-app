import React from 'react'
import { connect } from 'react-redux'
import { addTodo, sortTodo } from '../actions'
import './ContainersStyle.css'

const AddTodo = ({ dispatch }) => {
  
  let input
  const [isValid, setIsValid] = React.useState(true);

  const validateMinLength = (input) => {
    if (input.target.value.length > 20) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  const SortTodo = () => {
    dispatch(sortTodo())
  }

  return (
    <div>
      <div className="title">Tasks</div>
      <div className="add-container">
        <span>
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }}>
            <input className="text-input" placeholder="Add a task" onChange={(e) => validateMinLength(e)} ref={node => input = node} />
            <button className={ isValid ? 'btn-primary' : 'btn-disabled' } type="submit" disabled={!isValid}>
              Add Todo
            </button>
          </form>
        </span>
        <span>
          <button className="btn-primary" onClick={() => SortTodo()}>
            Sort
          </button>
        </span>
      </div>
      <span>{!isValid && (<span className="error-msg">Must be 20 characters or less.</span>)}</span>
    </div>
  )
}

export default connect()(AddTodo)