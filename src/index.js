import React from 'react';
import ReactDOM from 'react-dom/client';

import "./style/main.scss";
import Home from "./home-page";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
