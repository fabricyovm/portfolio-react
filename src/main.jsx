import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import MainLayout from './MainLayout.jsx'
import Home from './pages/Home/index.jsx'
import Projetos from './pages/Projetos/index.jsx'
import Contato from './pages/Contato/index.jsx'
import ErrorPage from './pages/ErrorPage/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projetos",
        element: <Projetos />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
