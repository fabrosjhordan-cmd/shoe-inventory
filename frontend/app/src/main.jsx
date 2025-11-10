import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from '../components/ErrorPage.jsx';
import Inventory from './Inventory.jsx';
import Sales from './Sales.jsx';
import TablesPage from './TablesPage.jsx';
import Products from './Products.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App link='/' page={0} />},
  {path: '/inventory', element: <Inventory link='inventory' page={2}/>},
  {path: '/sales', element: <Sales page={3}/>},
  {path: '/tables', element: <TablesPage link='tables' page={4} />},
  {path: '/products', element: <Products link='products' page={5} />},
  {path: '*', element: <ErrorPage />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
