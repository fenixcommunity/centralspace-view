import { combineReducers } from 'redux';
import centralspaceAuthReducer from "./auth/centralspaceAuthReducer";
import firebaseAuthReducer from "./auth/firebaseAuthReducer";
import appLogsReducer from './appLogsReducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import general from "./generalReducer";
import signin from "./signinReducer";

const globalReducer = combineReducers({
    centralspaceAuth: centralspaceAuthReducer,
    firebaseAuth: firebaseAuthReducer,
    appLogs: appLogsReducer,
    firestore: firestoreReducer, // synchronization with real db
    firebase: firebaseReducer,
    general,
    signin
});

export default globalReducer;
