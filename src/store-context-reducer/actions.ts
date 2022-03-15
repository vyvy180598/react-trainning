// 2. Actions
import { SET_TODO, ADD_TODO, DELETE_TODO} from './constants'
export const setTodo = (payload: string) => ({
  type: SET_TODO,
  payload
})

export const addTodo = (payload: string) => ({
  type: ADD_TODO,
  payload
})

export const deleteTodo = (payload: number) => ({
  type: DELETE_TODO,
  payload
})
