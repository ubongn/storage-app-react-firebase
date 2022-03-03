import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAesIEzVQG0CVPFJ0mM06hu2ZmrnGhlqMs",
    authDomain: "storage-app-6b7fc.firebaseapp.com",
    projectId: "storage-app-6b7fc",
    storageBucket: "storage-app-6b7fc.appspot.com",
    messagingSenderId: "153221111820",
    appId: "1:153221111820:web:70b0f04e4a3871377c0e29"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = getFirestore();
const storage = getStorage(firebaseApp);


export { auth, provider, db, storage }