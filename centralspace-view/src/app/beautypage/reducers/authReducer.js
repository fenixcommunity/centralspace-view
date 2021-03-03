export const initialState = {
    authenticatedInCentralspace: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case "AUTH_SET_AUTHENTICATED_IN_CENTRALSPACE": {
            const { authenticatedInCentralspace } = action;
            return {
                ...state,
                authenticatedInCentralspace,
            };
        }

        default:
            return state;
    }
};

export default authReducer;
