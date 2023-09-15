import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCmxWjsaGIv1Ii6chpMb6Q4NDBzWO6q8Ds",
    authDomain: "crwn-clothing-cea9f.firebaseapp.com",
    projectId: "crwn-clothing-cea9f",
    storageBucket: "crwn-clothing-cea9f.appspot.com",
    messagingSenderId: "163420064605",
    appId: "1:163420064605:web:478bbf1b3a94ba9ac8f6b4",
    measurementId: "G-TV6CLTT749"
};

// Initialize Firebase 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


