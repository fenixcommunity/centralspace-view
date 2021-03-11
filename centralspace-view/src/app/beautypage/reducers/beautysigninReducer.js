export const initialState = {
    authenticationAttemptFailed: false,
    signInMethod: null
};

const beautysigninReducer = (state = initialState, action) => {
    switch (action.type) {

        case "BSIGN_SET_AUTHENTICATION_ATTEMPT_FAILED": {
            const { authenticationAttemptFailed } = action;
            return {
                ...state,
                authenticationAttemptFailed
            };
        }

        case "BSIGN_SIGN_IN_METHOD": {
            const { signInMethod } = action;
            return {
                ...state,
                signInMethod
            };
        }

        default:
            return state;
    }
};

export default beautysigninReducer;
