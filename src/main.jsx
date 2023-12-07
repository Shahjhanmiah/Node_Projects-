import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Route.jsx'
import AuthProvider from './Components/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
    <App></App>
    </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)