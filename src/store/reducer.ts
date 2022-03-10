import { SET_TODO, ADD_TODO, DELETE_TODO} from './constants'

// 1. Init state
export const initState = {
  todoInput: '',
  todos: [] as Array<any>
}

// 3. Reducer
const reducer = (state: any, action: {type:string, payload: any}) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todoInput: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO: {
      const newTodos = [...state.todos]
      newTodos.splice(action.payload, 1)
      return {
        ...state,
        todos: newTodos
      }
    }
    default:
      throw new Error('Invalid action')
  }
}

export default reducer
