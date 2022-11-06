import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD9jsWk68iwAPENYoPBdRJqmxN_5YDD-bU",
    authDomain: "vue-auth-7c5e0.firebaseapp.com",
    projectId: "vue-auth-7c5e0",
    storageBucket: "vue-auth-7c5e0.appspot.com",
    messagingSenderId: "744370005854",
    appId: "1:744370005854:web:eed5fbb4bfcfcc2c6a11cf",
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const auth = () => getAuth(firebaseApp);
const status = (callback) => { return onAuthStateChanged(auth(), callback); }
const signIn = (email, password) => signInWithEmailAndPassword(auth(), email, password);
const storeUser = (email, password) => createUserWithEmailAndPassword(auth(), email, password);
const Logout = () => {auth().signOut(); alert("Deslogado com sucesso!");}
const user = () => { return auth().currentUser; } 

export { auth, status, signIn, storeUser, Logout, user };