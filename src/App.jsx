import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Pages/RootLayout';
import './index.css';
import ErrorPage from './UI/ErrorPage';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';  
import Customers from './Pages/Customers';
import Products from './Pages/Products';
import LoginPage from './Pages/LoginPage';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http.js";
import Signup from './components/auth/Signup.jsx';
import CartPage from './Pages/CartPage.jsx';
import CheckoutPage from './Pages/CheckoutPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'cart/checkout',
        element: <CheckoutPage />,
      }


    ]

  }
])


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App