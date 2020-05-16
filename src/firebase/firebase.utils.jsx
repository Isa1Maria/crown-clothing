import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC5A5x8aK_JVcwT076YitwuD3iBM9E-fyM",
  authDomain: "crown-db-2be9a.firebaseapp.com",
  databaseURL: "https://crown-db-2be9a.firebaseio.com",
  projectId: "crown-db-2be9a",
  storageBucket: "crown-db-2be9a.appspot.com",
  messagingSenderId: "904042738449",
  appId: "1:904042738449:web:867e49b93747220dc292b0",
  measurementId: "G-ESQ88V8YBP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
