import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { allRoutes } from './routes/allroutes';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {allRoutes.map((route, id) => (
          <Route path={route.path} element={route.component} key={id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
