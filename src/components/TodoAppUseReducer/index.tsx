import { useReducer, useRef } from 'react'
import reducerTodo, { initStateTodo } from './reducer'
import { setJob, addJob, deleteJob } from './actions'

export const TodoAppUseReducer = () => {
  const [todo, dispatchTodo] = useReducer(reducerTodo, initStateTodo)
  const { job, jobs } = todo

  const inputRef = useRef<any>()

  const handleSubmit = () => {
    dispatchTodo(addJob(job))
    dispatchTodo(setJob(''))

    inputRef.current.focus()
  }

  return (
    <div className="p-3">
      <h3>Todo</h3>
      <input
        ref={inputRef}
        type="text"
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => dispatchTodo(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job: string, idx: number) => (
          <li key={idx}>
            {job}
            <span onClick={() => dispatchTodo(deleteJob(idx))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
