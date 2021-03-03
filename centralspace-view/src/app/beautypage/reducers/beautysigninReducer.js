export const initialState = {
    authenticationAttemptFailed: false
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

        default:
            return state;
    }
};

export default beautysigninReducer;
