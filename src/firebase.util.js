import firebase from 'firebase'


/// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByfFEiK2U-Hvd4o7P2QXqBjattvgabWXQ",
    authDomain: "crown-clothing-cbf3c.firebaseapp.com",
    projectId: "crown-clothing-cbf3c",
    storageBucket: "crown-clothing-cbf3c.appspot.com",
    messagingSenderId: "256970681251",
    appId: "1:256970681251:web:18f5e700e0b2ee20610816",
    measurementId: "G-MVHT4GXN7J"  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider };
  export default db;