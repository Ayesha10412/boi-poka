import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Home from './component/Home/Home.jsx';
import Dashboard from './component/Dashboard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,

    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home> ,
      },

      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }


    ],

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)