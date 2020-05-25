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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
