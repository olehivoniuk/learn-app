import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import routes from './routs/routes'; // Import your routes

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'


function App() {
  
  return (
    <div className="App">
      <Router>
      <Navigation />
      <Routes>
        {routes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element} />
        ))}
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
