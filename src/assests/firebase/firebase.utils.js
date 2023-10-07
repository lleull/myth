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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
    console.log("userRef")
  
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
  
    return userRef;
  };
  
 export  const addCollectionsandDocuments = (collectionkey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionkey)


    console.log(collectionRef)
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocFile = collectionRef.doc()
      console.log(newDocFile)
      batch.set(newDocFile, obj)
      
    })
    batch.commit()
  }
  export const convertCollectioSnapShotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title, items} = doc.data();

     return {
      routeName : encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
     }
    })
    return  transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] =collection;
      return accumulator
    } , {})
  }



export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;



