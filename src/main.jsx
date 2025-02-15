import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
// To make store available globally for any component in the application
// we need to import it here
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* The Provider component is used to make the Redux store available 
    to any nested components that need to access the Redux state. /*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
