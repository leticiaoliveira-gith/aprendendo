import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './App' // Aqui ele busca o código que você colou no App.jsx
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
)