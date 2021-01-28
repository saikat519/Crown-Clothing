import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


/// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    //Your firebase credentials
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {

    // users collection in firestore separately from authentication 

  if (!userAuth) return;

  const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);  //uid is on firebase check that out

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;   // we need the userRef in our App that is why i am returning this userRef
};

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider };
  export default db;
