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
import User from './Components/user/User'
import Product from './Components/product/Product'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();
const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
      <Footer />
    </div>
  )
}
const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },

      ],
    },
    {
      path: "/login",
      element: <Login />
    }

  ]);


  return <RouterProvider router={router} />;
}

export default App;