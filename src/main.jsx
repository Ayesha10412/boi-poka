import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


import Root from './component/Root/Root.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Home from './component/Home/Home.jsx';
import Dashboard from './component/Dashboard/Dashboard.jsx';
import BookDetail from './component/BookDetail/BookDetail.jsx';
import ListedBooks from './component/ListedBooks/ListedBooks.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },


      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch('../booksData.json'),
      },

      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json')


      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },

    ],

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>,
)
