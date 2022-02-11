import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqB2hes9I3TUGtd0w3qYN0WeZXhCPCZW8",
    authDomain: "slack-app-7cac2.firebaseapp.com",
    projectId: "slack-app-7cac2",
    storageBucket: "slack-app-7cac2.appspot.com",
    messagingSenderId: "7057450348",
    appId: "1:7057450348:web:d9238e1a89cebe0418bf49",
    measurementId: "G-RF3NKQFQSN"
  };

const app = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore(app)

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export {provider, auth, db}