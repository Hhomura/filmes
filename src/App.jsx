import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Main from '../Main'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />
          }
        ]
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
