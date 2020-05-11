import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBCoKyGDmIP683VcHasH0oxRQlv11otg4Q',
  authDomain: 'crown-shop-db-df140.firebaseapp.com',
  databaseURL: 'https://crown-shop-db-df140.firebaseio.com',
  projectId: 'crown-shop-db-df140',
  storageBucket: 'crown-shop-db-df140.appspot.com',
  messagingSenderId: '745674523794',
  appId: '1:745674523794:web:0499f650e13778144bd24b',
  measurementId: 'G-DRK4JGRYYS',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
