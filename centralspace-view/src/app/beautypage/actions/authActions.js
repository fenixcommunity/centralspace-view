import { ApiCaller, Api } from '../../api/centralspaceApi';

export const checkUserAuth = (location) => (dispatch) => {
    ApiCaller().post(Api.auth.isAuthenticated, { locationPath: location.pathname })
        .then((response) => {
            dispatch(setAuthenticatedInCentralspace(response.status === 200));
        })
        .catch(() => {
            dispatch(setAuthenticatedInCentralspace(false));
        });
}

export const logoutUser = (history) => (dispatch) => {
    ApiCaller().post(Api.auth.logout)
        .then((response) => {
            if (response.status === 200) {
                dispatch(setAuthenticatedInCentralspace(false));
                history.push("/beautysignin");
            }
        });
}

export const setAuthenticatedInCentralspace = (authenticatedInCentralspace) => (dispatch) => {
    dispatch({
        type: "AUTH_SET_AUTHENTICATED_IN_CENTRALSPACE",
        authenticatedInCentralspace
    });
};