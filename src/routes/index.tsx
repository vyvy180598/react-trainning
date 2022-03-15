import { HomePage } from '../pages/HomePage'
import { PropsPage } from '../pages/PropsPage'
import { HooksPage } from '../pages/HooksPage'
import { UseStateComp } from '../components/UseStateComp'
import { UseEffectComp } from '../components/UseEffectComp'
import { UseLayoutEffectComp } from '../components/UseLayoutEffectComp'
import { UseRefComp } from '../components/UseRefComp'
import { UseCallbackComp } from '../components/UseCallbackComp'
import { UseMemoComp } from '../components/UseMemoComp'
import { UseReducerComp } from '../components/UseReducerComp'
import { UseContextComp } from '../components/UseContextComp'
import { GlobalContextTodoPage } from '../pages/GlobalContextTodoPage'
import { UseImperativeHandleComp } from '../components/UseImperativeHandleComp'
import { ProtectedPage } from '../pages/ProtectedPage'
import { RequireAuth } from '../components/RequireAuth'
import { LoginPage } from '../pages/LoginPage'
import { UsersPage } from '../pages/UsersPage'
import { User } from '../components/User'

import { useRoutes } from 'react-router-dom'
import { ReservationsPage } from '../pages/ReservationsPage'

function Routes () {
  return useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <HomePage /> },
    { path: "/props", element: <PropsPage /> },
    { path: "/users", element: <HooksPage />,
      // Nested routes use a children property
      children: [
        { path: "useState", element: <UseStateComp /> },
        { path: "useEffect", element: <UseEffectComp /> },
        { path: "useLayoutEffect", element: <UseLayoutEffectComp /> },
        { path: "useRef", element: <UseRefComp /> },
        { path: "useCallback", element: <UseCallbackComp /> },
        { path: "useMemo", element: <UseMemoComp /> },
        { path: "useReducer", element: <UseReducerComp /> },
        { path: "useContext", element: <UseContextComp /> },
        { path: "useImperativeHandle", element: <UseImperativeHandleComp /> },
      ]
    },
    { path: "/users", element: <UsersPage />,
      // Nested routes use a children property
      children: [
        { path: ":userId", element: <User /> },
      ]
    },
    { path: "/globalContext", element: <GlobalContextTodoPage /> },
    { path: "/login", element: <LoginPage /> },
    {
      path: "/protected",
      element: <RequireAuth><ProtectedPage /></RequireAuth>
    },
    { path: "/reservations", element: <ReservationsPage /> },
    {
      path: "*",
      element:
        <main style={{ padding: '1rem' }}>
          <p>There's nothing here!</p>
        </main>
    }
  ])
}

export default Routes
