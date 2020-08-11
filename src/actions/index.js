let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const sortTodo = () => ({
  type: 'SORT_TODO'
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const moveUp = id => ({
  type: 'MOVE_UP_TODO',
  id
})

export const moveDown = id => ({
  type: 'MOVE_DOWN_TODO',
  id
})
