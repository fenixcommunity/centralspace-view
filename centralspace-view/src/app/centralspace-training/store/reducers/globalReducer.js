import authReducer from './authReducer';
import accountReducer from './accountReducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const globalReducer = {
    auth: authReducer,
    account: accountReducer,
    firestore: firestoreReducer, // synchronization with real db
    firebase: firebaseReducer,
};

export default globalReducer;