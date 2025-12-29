import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from '../components/ErrorPage.jsx';
import Inventory from './Inventory.jsx';
import Sales from './Sales.jsx';
import Products from './Products/index.jsx';
import ProductDetails from './Products/ProductDetails.jsx';
import Login from './Auth/Login.jsx';
import AuthProvider from '../provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App link='/' page={0} />},
  {path: '/inventory', element: <Inventory link='inventory' page={2}/>},
  {path: '/sales', element: <Sales link='sales' page={3}/>},
  {path: '/products', element: <Products link='products' page={4} />},
  {path: '/products/productdetails', element: <ProductDetails link='productDetails' />},
  {path: '/auth/login', element: <Login />},
  {path: '*', element: <ErrorPage />}
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
  </AuthProvider>
)
