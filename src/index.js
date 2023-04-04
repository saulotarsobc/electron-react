import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Contatos from './pages/Contatos';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "./style/main.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "contatos",
    element: <Contatos />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);