import { combineReducers } from 'redux';
import centralspaceAuthReducer from "./auth/centralspaceAuthReducer";
import firebaseAuthReducer from "./auth/firebaseAuthReducer";
import appLogsReducer from './appLogsReducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import beautypage from "./beautypageReducer";
import beautysignin from "./beautysigninReducer";

const globalReducer = combineReducers({
    centralspaceAuth: centralspaceAuthReducer,
    firebaseAuth: firebaseAuthReducer,
    appLogs: appLogsReducer,
    firestore: firestoreReducer, // synchronization with real db
    firebase: firebaseReducer,
    beautypage,
    beautysignin
});

export default globalReducer;
