import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './pages/SignUp.tsx'
import Login from './pages/Login.tsx'

const router = createBrowserRouter([
  {path:'/',element:<App />},
  {path:'/signup', element:<SignUp />},
  {path:'/login', element:<Login />, },
  {path:'*', element:<h1 className=' text-red-500 text-6xl text-center flex justify-center items-center h-screen' >Lien introuvable</h1>},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
