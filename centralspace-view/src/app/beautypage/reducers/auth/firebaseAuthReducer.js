const initState = {
    authError: null
}

const firebaseAuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FIREBASE_LOGIN_SUCCESS':
            return {
                ...state, //don't overide last state
                authError: null
            };
        case 'FIREBASE_LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'FIREBASE_SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'FIREBASE_SIGNUP_ERROR':
            return {
                ...state,
                authError: action.error.message
            }
        case 'FIREBASE_SIGNOUT_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'FIREBASE_SIGNOUT_ERROR':
            return {
                ...state,
                authError: action.error.message
            }
        case 'FIREBASE_CLEAR_AUTH_ERROR':
            return {
                ...state,
                authError: initState.authError
            }
        default:
            return state;
    }
}

export default firebaseAuthReducer;