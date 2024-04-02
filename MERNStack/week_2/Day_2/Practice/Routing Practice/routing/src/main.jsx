import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// ! import BrowserRouter
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // !chnge from <react.StrictMode> to <BrowserRouter>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
