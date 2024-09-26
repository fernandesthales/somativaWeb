// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <button onClick={() => navigate('/login')} style={styles.button}>Login</button>
      <button onClick={() => navigate('/cadastro')} style={styles.button}>Cadastro</button>
      <button onClick={() => navigate('/principal')} style={styles.button}>Principal</button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
  }
};

export default Header;
