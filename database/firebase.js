import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwuuKUYZDXkJfcvxdlLVY-w91FGY1jGHM",
    authDomain: "react-native-firebase-bd49a.firebaseapp.com",
    projectId: "react-native-firebase-bd49a",
    storageBucket: "react-native-firebase-bd49a.appspot.com",
    messagingSenderId: "467929176037",
    appId: "1:467929176037:web:e7185e5d6e3c006bd5c10c"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};