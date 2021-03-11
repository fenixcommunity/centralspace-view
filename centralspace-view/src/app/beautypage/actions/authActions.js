import { ApiCaller, Api } from '../../api/centralspaceApi';
import { signOut as signOutFirebaseUser } from '../../centralspace-training/store/actions/authActions';

export const isLoggedUserStillAuthenticated = (location) => (dispatch) => {
    ApiCaller().post(Api.auth.isAuthenticated, { locationPath: location.pathname })
        .then((response) => {
            dispatch(setAuthenticatedInCentralspace(response.status === 200));
        })
        .catch(() => {
            dispatch(setAuthenticatedInCentralspace(false));
        });
}

export const logoutUser = (authenticatedInCentralspace, authenticationInFirebase, history) => (dispatch) => {
    if (authenticatedInCentralspace) {
        dispatch(signOutCentralspaceUser(history))
    } else if (authenticationInFirebase.uid) {
        dispatch(signOutFirebaseUser());
    }
}

export const setAuthenticatedInCentralspace = (authenticatedInCentralspace) => (dispatch) => {
    dispatch({
        type: "AUTH_SET_AUTHENTICATED_IN_CENTRALSPACE",
        authenticatedInCentralspace
    });
};

const signOutCentralspaceUser = (history) => (dispatch) => {
    ApiCaller().post(Api.auth.logout)
        .then((response) => {
            if (response.status === 200) {
                dispatch(setAuthenticatedInCentralspace(false));
                history.push("/beautysignin");
            }
        });
}
