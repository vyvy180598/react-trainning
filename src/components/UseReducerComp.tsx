// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer -> dễ dàng tách file
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

import { useReducer } from 'react'
import { TodoAppUseReducer } from './TodoAppUseReducer'
import { toast } from 'react-toastify'

// 1. Init state
const initState = 0

// 2 .Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// 3. Reducer
const reducer = (state: number, action: string) => {
  toast.info('reducer running...', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    pauseOnFocusLoss: true
  })

  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
}

// Todo List

export function UseReducerComp() {
  const [count, dispatch] = useReducer(reducer, initState)

  // Todo List

  return (
    <>
      <div className="p-3">
        <h2>{count}</h2>
        <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      </div>
      <TodoAppUseReducer />
    </>
  )
}
