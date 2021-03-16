import { signInUser } from './auth/authActions';

export const signIn = (event, history) => (dispatch) => {
    event.preventDefault();

    const target = event.target;
    const username = target.username;
    const password = target.password;
    dispatch(signInUser(username, password, history))
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

export const setMainTheme = (mainThemeColor) => (dispatch) => {
    dispatch({
        type: "BSIGN_SWITCH_MAIN_THEME",
        mainThemeColor
    });
};