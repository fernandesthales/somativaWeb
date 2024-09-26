// pages/Principal.js
import React, { useEffect, useState } from 'react';
import { firestore, auth } from '../firebase/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const Principal = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(firestore, 'usuarios', user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log('Documento do usuário não encontrado');
          }
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <div>Carregando...</div>;

  return (
    <div style={styles.container}>
      <h2>Página Principal</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Nome:</label>
        <span style={styles.input}>{userData.nome}</span>
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Sobrenome:</label>
        <span style={styles.input}>{userData.sobrenome}</span>
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Data de Nascimento:</label>
        <span style={styles.input}>{userData.dataNascimento}</span>
      </div>
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
    backgroundColor: '#e9ecef',
    display: 'inline-block',
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

export default Principal;

