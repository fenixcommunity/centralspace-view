import { ApiCaller, Api } from '../../config/api/centralspaceApi';
import { setAuthenticatedInCentralspace } from './authActions';

export const handleSignInAction = (event, history) => (dispatch) => {
    event.preventDefault();

    const target = event.target;
    const username = target.username;
    const password = target.password;
    const bodyFormData = new FormData(); // or new FormData(event.target);
    bodyFormData.append(username.id, username.value);
    bodyFormData.append(password.id, password.value);

    const mstepper = document.mstepper;
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
                    history.push("/beautypage");
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

const setAuthenticationAttemptFailed = (authenticationAttemptFailed) => (dispatch) => {
    dispatch({
        type: "BSIGN_SET_AUTHENTICATION_ATTEMPT_FAILED",
        authenticationAttemptFailed
    });
};