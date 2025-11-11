import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./routes/LandingPage.jsx"

import RootLayout from "./routes/RootLayout.jsx" 

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // O Layout Raiz é o elemento principal
    // Todas as suas rotas antigas agora são "filhas" (children) do layout
    children: [
      {
        index: true, // A rota "/" exata renderiza a LandingPage
        element: <LandingPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
