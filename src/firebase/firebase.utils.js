import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';


export const createUserProfileDocument = async (userAuth, addicionalData) => {

  if (! userAuth) return;

  let userRef = firestore.doc(`users/${userAuth.uid}`);
  let snapShot = await userRef.get();

  if (! snapShot.exists){
    let { displayName, email } = userAuth;
    let createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addicionalData
      })
    }catch (error){
      console.log(`error creating user: ${error.message}`);
    }
  }

  return userRef;

};

const config = {
    apiKey: "AIzaSyCBM2Tv_yLnetks2zXB19a8Ougk0waArtw",
    authDomain: "crw-db-d533f.firebaseapp.com",
    projectId: "crw-db-d533f",
    storageBucket: "crw-db-d533f.appspot.com",
    messagingSenderId: "826358142251",
    appId: "1:826358142251:web:ad61b0956cb8ca460e216e",
    measurementId: "G-RQBZ9E1KN8"
  };

  ! firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;