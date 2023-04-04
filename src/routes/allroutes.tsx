import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home';

const allRoutes = [
  // <Route path="/" element={ <Home/> } />,
  { path: '/', component: <Home /> },
];

export { allRoutes };
