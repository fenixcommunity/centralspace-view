import { ApiCaller, Api } from '../../api/centralspaceApi';
import { setAuthenticatedInCentralspace } from './authActions';
import { signIn as signInToFirebase } from '../../centralspace-training/store/actions/authActions';
import { LOG_IN_METHOD } from "../../config/appConfig";

export const signIn = (event, history) => (dispatch, getState) => {
    event.preventDefault();

    const target = event.target;
    const username = target.username;
    const password = target.password;

    const mstepper = document.mstepper;
    const signInMethod = getState().beautysignin.signInMethod;
    if (signInMethod === LOG_IN_METHOD.CENTRALSPACE) {
        dispatch(signInToCentralspace(username, password, mstepper, history));
    } else if (signInMethod === LOG_IN_METHOD.FIREBASE) {
        dispatch(signInToFirebase({ email: username.value, password: password.value, mstepper, history }));
    }
}

export const setAuthenticationAttemptFailed = (authenticationAttemptFailed) => (dispatch) => {
    dispatch({
        type: "BSIGN_SET_AUTHENTICATION_ATTEMPT_FAILED",
        authenticationAttemptFailed
    });
};
export const setSignInMethod = (signInMethod) => (dispatch) => {
    dispatch({
        type: "BSIGN_SIGN_IN_METHOD",
        signInMethod
    });
};

const signInToCentralspace = (username, password, mstepper, history) => (dispatch) => {
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