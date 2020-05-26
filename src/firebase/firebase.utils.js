import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAIVmf44jhsgQPQeUWX_toevPrDROt9XMA",
  authDomain: "crwn-db-84ac5.firebaseapp.com",
  databaseURL: "https://crwn-db-84ac5.firebaseio.com",
  projectId: "crwn-db-84ac5",
  storageBucket: "crwn-db-84ac5.appspot.com",
  messagingSenderId: "69786392563",
  appId: "1:69786392563:web:90ddabd2cb3a28175aa486",
  measurementId: "G-81DVERM3P8",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
