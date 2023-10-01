import React from 'react'
import './styles/global.scss'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Users from './pages/users/Users'
import {
  createBrowserRouter, RouterProvider, Outlet
} from "react-router-dom";
import Footer from './Components/footer/Footer';
import Menu from './Components/menu/Menu';
import Navbar from './Components/navbar/Navbar';
import Login from './pages/login/Login';

const Layout =()=>{
  return (
    <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
    {
      path:"/login",
      element:<Login />
    }

  ]); 


  return  <RouterProvider router={router}/> ;
}

export default App;