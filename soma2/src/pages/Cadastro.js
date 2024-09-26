// pages/Cadastro.js
import React, { useState } from 'react';
import { auth, firestore } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { doc, setDoc } from "firebase/firestore";

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleCadastro = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;
      
      await setDoc(doc(firestore, 'usuarios', uid), {
        nome,
        sobrenome,
        dataNascimento,
        email,
        uid
      });

      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Cadastro</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>E-mail:</label>
        <input style={styles.input} placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Senha:</label>
        <input style={styles.input} type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Nome:</label>
        <input style={styles.input} placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Sobrenome:</label>
        <input style={styles.input} placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Data de Nascimento:</label>
        <input style={styles.input} type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
      </div>
      <button style={styles.button} onClick={handleCadastro}>Cadastrar</button>
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

export default Cadastro;
