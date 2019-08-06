import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCLYqF3xV0Me7phXNv0DdKucLTSP3KKTN8",
    authDomain: "crown-38aa2.firebaseapp.com",
    databaseURL: "https://crown-38aa2.firebaseio.com",
    projectId: "crown-38aa2",
    storageBucket: "",
    messagingSenderId: "479240125214",
    appId: "1:479240125214:web:0bee124fffb54a12"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;