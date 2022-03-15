import { useRef } from 'react'

// Global Context -> Giống Redux concept
import { useStore, actions } from '../store-context-reducer'


export const GlobalContextTodoPage = () => {
  const [state, dispatch] = useStore()
  const {todoInput, todos} = state

  const inputRef = useRef<any>()

  const handleSubmit = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodo(''))

    inputRef.current.focus()
  }

  return (
    <div className="p-3">
      <h3>Todo</h3>
      <input
        ref={inputRef}
        type="text"
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => dispatch(actions.setTodo(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo: string, idx: number) => (
          <li key={idx}>
            {todo}
            <span onClick={() => dispatch(actions.deleteTodo(idx))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
