function todoReducer(state = { todos: []}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, { todos: [
        ...state.todos,
        action.payload
      ]})
    default:
      return state
  }
}


const todos = (state = { todos: []}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, { todos: [...state.todos, action.payload]})
    default:
      return state
  }
}

export default todos
// export default todoReducer
