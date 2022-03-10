import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const User = () => {
  const params = useParams<any>()
  const [user, setUser] = useState<any>()

  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
      fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        .then((res) => res.json())
        .then((user) => {
          setUser(user)
        })
    }
    return () => {
      unmounted = true
    }
  }, [params.userId])

  return (
    <>
      <h2 className="text-primary">User info: </h2>
      {user && (
        <>
          <h4>Name: {user.name}</h4>
          <h4>Email: {user.email}</h4>
          <h4>Phone: {user.phone}</h4>
          <h4>Website: {user.website}</h4>
        </>
      )}
    </>
  )
}
