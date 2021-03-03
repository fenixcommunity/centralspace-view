
export const setAuthenticatedInCentralspace = (authenticatedInCentralspace) => (dispatch) => {
    dispatch({
        type: "AUTH_SET_AUTHENTICATED_IN_CENTRALSPACE",
        authenticatedInCentralspace
    });
};