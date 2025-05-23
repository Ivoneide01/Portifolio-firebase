// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Importar as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmqnjiAHb-pjqsspZ6kcBjcK9Lks0iHqU",
  authDomain: "portifolionid.firebaseapp.com",
  databaseURL: "https://portifolionid-default-rtdb.firebaseio.com",
  projectId: "portifolionid",
  storageBucket: "portifolionid.firebasestorage.app",
  messagingSenderId: "438566113511",
  appId: "1:438566113511:web:efaf522682c2d6d8051242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Obter referência ao banco de dados
const db = getDatabase(app);
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Função para enviar dados do formulário para o Firebase
export function enviarDadosFormulario(name) {
  const contatosRef = ref(db, 'contatos'); // Referência à coleção 'contatos'
  return push(contatosRef, {
    nome: name
  });
}