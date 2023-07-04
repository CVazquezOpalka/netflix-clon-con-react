
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCcz0AYB3ovMwo4hmzgMa864MpcZq53Vuk",
  authDomain: "netflixclon-14120.firebaseapp.com",
  projectId: "netflixclon-14120",
  storageBucket: "netflixclon-14120.appspot.com",
  messagingSenderId: "339241909403",
  appId: "1:339241909403:web:20cd1108062629b3005a3e",
};

// Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
