// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Principal from './pages/Principal';
import Header from './components/Header'; // Importando o Header

// Componente de navegação inicial
const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Bem-vindo à Aplicação</h1>
  </div>
);

// Renderizando as rotas e incluindo o Header
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header /> {/* Incluindo o Header no topo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
