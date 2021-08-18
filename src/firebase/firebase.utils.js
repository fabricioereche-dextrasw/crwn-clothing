import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCBM2Tv_yLnetks2zXB19a8Ougk0waArtw",
    authDomain: "crw-db-d533f.firebaseapp.com",
    projectId: "crw-db-d533f",
    storageBucket: "crw-db-d533f.appspot.com",
    messagingSenderId: "826358142251",
    appId: "1:826358142251:web:ad61b0956cb8ca460e216e",
    measurementId: "G-RQBZ9E1KN8"
  };

  firebase.initializeApp(config);
  firebase.analytics();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;