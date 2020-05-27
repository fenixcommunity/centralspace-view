import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

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
firebase.analytics();
firebase.firestore().settings({})

// firebase - NoSql document structure
export default firebase;

// ~~~~~~ DATABASE RULES ~~~~~~ 
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {

//     match /accounts/{account} {
//       allow read, write: if request.auth.uid != null;
//     }
//     match /users/{userId} {
//     allow create
//     allow read: if request.auth.uid != null
//     allow write: if request.auth.uid == userId
//     }
//   }
// }

// ~~~~~~ FUCTIONS RULES ~~~~~~ 
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {

//     match /accounts/{account} {
//       allow read, write: if request.auth.uid != null;
//     }
//     match /users/{userId} {
//     allow create
//     allow read: if request.auth.uid != null
//     allow write: if request.auth.uid == userId
//     }
//   }
// }