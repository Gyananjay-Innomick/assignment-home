import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { allRoutes } from './routes/allroutes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {allRoutes.map((route, id) => (
          <Route path={route.path} element={route.component} key={id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
