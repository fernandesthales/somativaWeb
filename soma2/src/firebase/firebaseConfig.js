// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBL7S04EVhvO06aPZDudIx_lX4jmwWAzxo",
    authDomain: "projeto1-b5b03.firebaseapp.com",
    projectId: "projeto1-b5b03",
    storageBucket: "projeto1-b5b03.appspot.com",
    messagingSenderId: "40048322662",
    appId: "1:40048322662:web:3a1c3a1bd3d755d9ae65a7"
 };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a autenticação e Firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
