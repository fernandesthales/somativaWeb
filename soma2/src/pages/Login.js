// pages/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/principal'); // Redirecionar para a página principal se o login for bem-sucedido
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Usuário não cadastrado ou credenciais incorretas.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>E-mail:</label>
        <input style={styles.input} placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Senha:</label>
        <input style={styles.input} type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </div>
      <button style={styles.button} onClick={handleLogin}>Entrar</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
    marginTop: '50px'
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    width: '100%'
  },
  label: {
    width: '150px',
    textAlign: 'right',
    marginRight: '10px',
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  }
};

export default Login;



