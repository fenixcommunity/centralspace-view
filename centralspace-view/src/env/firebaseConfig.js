import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// safe values
var config = {
    apiKey: "AIzaSyB-fuw7wyLtZNAQLF4dJrgW297jcD30_F0",
    authDomain: "centralspace-view.firebaseapp.com",
    databaseURL: "https://centralspace-view.firebaseio.com",
    projectId: "centralspace-view",
    storageBucket: "centralspace-view.appspot.com",
    messagingSenderId: "560328077141",
    appId: "1:560328077141:web:878e960f9465ae208609dc",
    measurementId: "G-4VQK0D77JH"
};

firebase.initializeApp(config);
// firebase.analytics();
firebase.firestore().settings({})

// firebase - NoSql document structure
export default firebase;