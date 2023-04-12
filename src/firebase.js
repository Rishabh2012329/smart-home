import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBoxeOKlM1vUd3zNrv1qAwqNfjGtRJtN8g",
  authDomain: "finalprojectphase-f6972.firebaseapp.com",
  databaseURL: "https://finalprojectphase-f6972-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "finalprojectphase-f6972",
  storageBucket: "finalprojectphase-f6972.appspot.com",
  messagingSenderId: "219764261412",
  appId: "1:219764261412:web:82ecbdde1f8be0cb2e8eb1",
  measurementId: "G-KB26RDFB18"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const database = getDatabase(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });