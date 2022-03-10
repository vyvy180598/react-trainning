import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { PropsPage } from './pages/PropsPage'
import { HooksPage } from './pages/HooksPage'
import { UseStateComp } from './components/UseStateComp'
import { UseEffectComp } from './components/UseEffectComp'
import { UseLayoutEffectComp } from './components/UseLayoutEffectComp'
import { UseRefComp } from './components/UseRefComp'
import { UseCallbackComp } from './components/UseCallbackComp'
import { UseMemoComp } from './components/UseMemoComp'
import { UseReducerComp } from './components/UseReducerComp'
import { UseContextComp } from './components/UseContextComp'
import { GlobalContextTodoPage } from './pages/GlobalContextTodoPage'
import { UseImperativeHandleComp } from './components/UseImperativeHandleComp'
import { ProtectedPage } from './pages/ProtectedPage'
import { RequireAuth } from './components/RequireAuth'
import { LoginPage } from './pages/LoginPage'
import { UsersPage } from './pages/UsersPage'
import { User } from './components/User'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/props">Props Example</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/globalContext">Global Context</Link>
          </li>
          <li>
            <Link to="/users">Users - Dynamic Route</Link>
          </li>
          <li>
          <Link to="/protected">Protected Page</Link>
        </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="props" element={<PropsPage />} />
        <Route path="hooks" element={<HooksPage />}>
          <Route path="useState" element={<UseStateComp />} />
          <Route path="useEffect" element={<UseEffectComp />} />
          <Route path="useLayoutEffect" element={<UseLayoutEffectComp />} />
          <Route path="useRef" element={<UseRefComp />} />
          <Route path="useCallback" element={<UseCallbackComp />} />
          <Route path="useMemo" element={<UseMemoComp />} />
          <Route path="useReducer" element={<UseReducerComp />} />
          <Route path="useContext" element={<UseContextComp />} />
          <Route path="useImperativeHandle" element={<UseImperativeHandleComp />} />
        </Route>
        <Route path="globalContext" element={<GlobalContextTodoPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        <Route path="users" element={<UsersPage />} >
          <Route path=":userId" element={<User />} />
        </Route>

        {/* No match route */}
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  )
}


export default App
