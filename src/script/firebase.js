import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
  apiKey: 'AIzaSyCbGpSvwZSRWEsZH01jrK_0DkiyTJnbRpk',
  authDomain: 'sikdang-4317a.firebaseapp.com',
  projectId: 'sikdang-4317a',
  storageBucket: 'sikdang-4317a.appspot.com',
  messagingSenderId: '707531559007',
  appId: '1:707531559007:web:d0fed1de71edfda2394bea',
};
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
