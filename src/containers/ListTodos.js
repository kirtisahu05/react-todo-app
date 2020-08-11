import { connect } from 'react-redux'
import { toggleTodo, moveUp, moveDown } from '../actions'
import TodoList from '../components/TodoList'

const getIncompletedTodos = (todos) => {
  return todos?.filter(({ completed }) => !completed)
}

const getCompletedTodos = (todos) => {
  return todos?.filter(({ completed }) => completed)
}

const mapStateToProps = state => ({
  incompletedTodos: getIncompletedTodos(state.todos),
  completedTodos: getCompletedTodos(state.todos)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  moveUp: id => dispatch(moveUp(id)),
  moveDown: id => dispatch(moveDown(id)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)