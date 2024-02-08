import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} 
from "react-router-dom";
import App from './App.tsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './pages/HomePage.tsx';
import ProductPage from './pages/ProductPage.tsx';
import axios from 'axios';
import { HelmetProvider } from 'react-helmet-async';

axios.defaults.baseURL=
process.env.NODE_ENV === "development"? "http://localhost:4000" : "/"


const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<App/>}>
  <Route index={true} element={<HomePage />} />
  <Route path='product/:slug' element={<ProductPage />} />
     {/* <Route path="dashboard" element={<Dashboard />} /> */}
    {}
    </Route>
));
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  </React.StrictMode>,
)
