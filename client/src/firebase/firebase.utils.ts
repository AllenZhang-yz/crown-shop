import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { ICollection } from '../redux/shop/shopReducer';

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

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: any
) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: ICollection[]
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });
  await batch.commit();
};

export const convertCollectionsSnapshotToMap = (
  collections: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
) => {
  const transformedCollection = collections.docs.map((doc) =>
    doc.data()
  ) as ICollection[];
  return transformedCollection.reduce(
    (accumulator: { [key: string]: ICollection }, collection: ICollection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },
    {}
  );
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
