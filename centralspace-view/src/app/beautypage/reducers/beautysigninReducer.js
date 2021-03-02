export const initialState = {
    authenticatedInCentralspace: false,
    authenticationAttemptFailed: false
};

const beautysigninReducer = (state = initialState, action) => {
    switch (action.type) {

        case "BSIGN_SET_AUTHENTICATED_IN_CENTRALSPACE": {
            const { authenticatedInCentralspace } = action;
            return {
                ...state,
                authenticatedInCentralspace,
                authenticationAttemptFailed: !authenticatedInCentralspace
            };
        }

        default:
            return state;
    }
};

export default beautysigninReducer;
