import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App.jsx'
import { StateContextProvider } from './contexts/StateContextProvider'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>
)
