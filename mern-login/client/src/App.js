import logo from './logo.svg';
import './App.css';
import React from 'react'


//** components  */
import Register from './component/Register'
import Username from './component/Username'
import PageNotFound from './component/PageNotFound'
import Password from './component/Password'
import Profile from './component/Profile'
import Recovery from './component/Recovery'
import Reset from './component/Reset'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth';


/** root routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Username />
  },
  {
    path : '/register',
    element : <Register />
  },
  {
    path: '/password',
    element: <ProtectRoute><Password /></ProtectRoute>
  },
  {
    path: '/recovery',
    element: <Recovery />
  },
  {
    path: '/reset',
    element: <Reset />
  },
  { 
    path: '/profile',
    element: <AuthorizeUser><Profile /></AuthorizeUser> 
  }
])



function App() {
  return (
   <main>
    <RouterProvider router={router}></RouterProvider>
   </main>
  );
}

export default App;
