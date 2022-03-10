import { useNavigate, useLocation } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location: any = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = () => {
    localStorage.setItem('isAuth', 'true')
    navigate(from, { replace: true })
  }

  return (
    <>
      <h2 className="text-primary">You are not logged in.</h2>
        <button onClick={handleLogin}>Click me to login!</button>
    </>
  )
}
