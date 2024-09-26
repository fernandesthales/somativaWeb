// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Principal from '../pages/Principal';

const AppRoutes = () => (
    <div>
        <Router>
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/principal" element={<Principal />} />
    </Routes>
  </Router>
    </div>
  
);

export default AppRoutes;

