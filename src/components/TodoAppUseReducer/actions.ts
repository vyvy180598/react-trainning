// 2. Actions
import { SET_JOB, ADD_JOB, DELETE_JOB} from './constants'
export const setJob = (payload: string) => ({
  type: SET_JOB,
  payload
})

export const addJob = (payload: string) => ({
  type: ADD_JOB,
  payload
})

export const deleteJob = (payload: number) => ({
  type: DELETE_JOB,
  payload
})
