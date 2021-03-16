import { ApiCaller, Api } from '../../../beautypage/api/centralspaceApi';
import { setAuthenticationAttemptFailed } from '../signinActions';

export const signInToCentralspace = (username, password, history) => (dispatch) => {
    const mstepper = document.mstepper;
    const bodyFormData = new FormData(); // or new FormData(event.target);
    bodyFormData.append(username.id, username.value);
    bodyFormData.append(password.id, password.value);
    ApiCaller().post(Api.auth.signin, bodyFormData,
        {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((response) => {
            if (response.status === 200) {
                dispatch(setAuthenticatedInCentralspace(true));
                dispatch(setAuthenticationAttemptFailed(false));
                if (mstepper) {
                    mstepper.correctStep()
                }
                setTimeout(() => {
                    history.push("/");
                }, 1500)
            }
        })
        .catch(() => {
            dispatch(setAuthenticatedInCentralspace(false));
            dispatch(setAuthenticationAttemptFailed(true));
            if (mstepper) {
                mstepper.wrongStep();
            }
        });
}

export const isLoggedUserStillAuthenticated = (location) => (dispatch) => {
    ApiCaller().post(Api.auth.isAuthenticated, { locationPath: location.pathname })
        .then((response) => {
            dispatch(setAuthenticatedInCentralspace(response.status === 200));
        })
        .catch(() => {
            dispatch(setAuthenticatedInCentralspace(false));
        });
}

export const signOutCentralspaceUser = (history) => (dispatch) => {
    ApiCaller().post(Api.auth.logout)
        .then((response) => {
            if (response.status === 200) {
                dispatch(setAuthenticatedInCentralspace(false));
                history.push("/signin");
            }
        });
}

export const setAuthenticatedInCentralspace = (authenticatedInCentralspace) => (dispatch) => {
    dispatch({
        type: "AUTH_SET_AUTHENTICATED_IN_CENTRALSPACE",
        authenticatedInCentralspace
    });
};