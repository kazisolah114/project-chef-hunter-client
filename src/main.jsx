import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Layout/Main/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Chef from './Pages/Chef/Chef.jsx';
import ChefRecipes from './Pages/ChefRecipes/ChefRecipes.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-hunter-server-side-kazisolah114.vercel.app/chefs')
      }
    ]
  },
  {
    path: ":id",
    element: <ChefRecipes></ChefRecipes>,
    loader: ({params}) => fetch(`https://chef-hunter-server-side-kazisolah114.vercel.app/chefs/${params.id}`)
  },
  {
    path: 'blog',
    element: <Blog></Blog>
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
