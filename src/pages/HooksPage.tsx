import { Link, Outlet } from 'react-router-dom';

const hooks = [
  {
    name: 'useState()',
    path: 'useState',
  },
  {
    name: 'useEffect()',
    path: 'useEffect',
  },
  {
    name: 'useLayoutEffect()',
    path: 'useLayoutEffect',
  },
  {
    name: 'useRef()',
    path: 'useRef',
  },
  {
    name: 'useCallback()',
    path: 'useCallback',
  },
  {
    name: 'useMemo()',
    path: 'useMemo',
  },
  {
    name: 'useReducer()',
    path: 'useReducer',
  },
  {
    name: 'useContext()',
    path: 'useContext',
  },
  {
    name: 'useImperativeHandle()',
    path: 'useImperativeHandle',
  }
];

export function HooksPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Hooks:</h1>
      <nav
        style={{
          border: '1px solid',
          display: 'flex',
        }}
      >
        {hooks.map((hook) => (
          <Link
            style={{
              display: 'block',
              padding: '1rem 1rem',
            }}
            to={`/hooks/${hook.path}`}
            key={hook.name}
          >
            {hook.name}
          </Link>
        ))}
      </nav>

      <Outlet />
    </div>
  );
}
