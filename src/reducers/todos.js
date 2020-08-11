import {reorder, compare} from './utils.js'

const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'SORT_TODO':
        const arr = [...state]
        return arr.sort(compare);
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      case 'MOVE_UP_TODO':
        return reorder(state, action.id, 'up');
      case 'MOVE_DOWN_TODO':
        return reorder(state, action.id, 'down');
      default:
        return state
    }
  }
  
  export default todos