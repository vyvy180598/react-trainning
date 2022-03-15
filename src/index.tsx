import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
import './custom.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Store with context and useReducer
import { StoreProvider } from './store-context-reducer'
// Store with Redux
import { Provider } from 'react-redux'
import { store } from './store'

localStorage.setItem('isAuth', 'false')

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        {/* Store concept with Context and useReducer() */}
        <StoreProvider>
          <App />
          <ToastContainer newestOnTop={true} limit={5}/>
        </StoreProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
