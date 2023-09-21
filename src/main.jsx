import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/components/Home/Home.jsx'
import About from './assets/components/About/About.jsx'
import Services from './assets/components/Services/Services.jsx'
import Prices from './assets/components/Prices/Prices.jsx'
import Users from './assets/components/Users/Users.jsx'
import UserDetails from './assets/components/UserDetails/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path:'/aboutus',
        element: <About></About>

      },
      {
        path:'/services',
        element: <Services></Services>
      },
      {
        path:'/prices',
        element: <Prices></Prices>
      },
      {
        path:'/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path:'/users/:userId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
