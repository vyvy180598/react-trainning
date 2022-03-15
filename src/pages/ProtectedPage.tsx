import { useNavigate } from 'react-router-dom'

export const ProtectedPage = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.setItem('isAuth', 'false')
    navigate('/protected')
  }

  return (
    <>
      <h2 className="text-success">Welcome to Protected page</h2>
      <button onClick={handleLogout}>Click me to logout!</button>
    </>
  )
}
