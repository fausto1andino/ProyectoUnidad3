import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAJ9sWL4tqs-ezVdZIaAyseDQgR3AK7FmQ",
  authDomain: "prograwebtg3.firebaseapp.com",
  projectId: "prograwebtg3",
  storageBucket: "prograwebtg3.appspot.com",
  messagingSenderId: "993212797436",
  appId: "1:993212797436:web:eb2e5f476def12d5062279",
  measurementId: "G-5EENJBLXQS"
};

/*const db = getFirestore(app);*/
const fire = firebase.initializeApp(firebaseConfig);
export default fire;