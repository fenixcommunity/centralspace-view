import authReducer from './authReducer';
import accountReducer from './accountReducer';
import { firestoreReducer } from 'redux-firestore'
import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase'

const globalReducer = combineReducers({
    auth: authReducer,
    account: accountReducer,
    firestore: firestoreReducer, // synchronization with real db
    firebase: firebaseReducer
});

// const globalReducer = (state = initState, action) => {
//     if (action.type === 'DELETE_ACCOUNT') {
//         const newAccounts = state.accounts.filter(account => {
//             return account.id !== action.id
//         });
//         return {
//             ...state,
//             accounts: newAccounts
//         }
//     }

//     return state;
// }

export default globalReducer;