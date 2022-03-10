import { useEffect, useState } from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'

export const UsersPage = () => {
  const [users, setUsers] = useState<Array<any>>([])
  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => {
          setUsers(users)
        })
    }
    return () => {
      unmounted = true
    }
  }, [])
  return (
    <>
      <h1>Users: </h1>
      <div className="p-3 d-flex">
        <div>
          {users.map((user) => (
            <div key={user.id} style={{ padding: '20px', border: '1px solid' }}>
              {user.name}
              <Link
                style={{ float: 'right' }}
                to={`/users/${user.id}`}
                key={user.id}
              >
                Details
              </Link>
            </div>
          ))}
        </div>
        <div className="p-3">
          <Outlet />
        </div>
      </div>
      <p>-----------------------------------------------</p>
      <div className="p-3 d-flex">
        <div>
          {users.map((user) => (
            <div key={user.id} style={{ padding: '20px', border: '1px solid' }}>
              {user.name}
              <NavLink
                style={({ isActive }) => {
                  return {
                    float: 'right',
                    color: isActive ? 'red' : ''
                  }
                }}
                to={`/users/${user.id}`}
                key={user.id}
              >
                Details
              </NavLink>
            </div>
          ))}
        </div>
        <div className="p-3">
          <Outlet />
        </div>
      </div>
    </>
  )
}
