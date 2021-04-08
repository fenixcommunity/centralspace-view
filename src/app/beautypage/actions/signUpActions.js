import { signUpUser } from './auth/authActions';
import { setLoaderLoaded } from './generalActions';

export const signUp = (formFields, event, history, location) => (dispatch) => {
    event.preventDefault();

    // formFields registered useForm -> 
    const target = event.target;
    const signUpRequest =  {
        firstName: target.firstName,
        lastName: target.lastName,
        email: target.email,
        password: target.password
    }
    dispatch(signUpUser(signUpRequest, history, location))
}

export const setRegistrationAttemptFailed = (registrationAttemptFailed) => (dispatch) => {
    dispatch(setLoaderLoaded(false));
    dispatch({
        type: "BSIGN_SET_REGISTRATION_ATTEMPT_FAILED",
        registrationAttemptFailed
    });
};

export const setSignUpMethod = (signUpMethod) => (dispatch) => {
    dispatch({
        type: "BSIGN_SIGN_UP_METHOD",
        signUpMethod
    });
};

export const setMainTheme = (mainThemeColor) => (dispatch) => {
    dispatch({
        type: "BSIGN_SWITCH_MAIN_THEME",
        mainThemeColor
    });
};

export const setPassword = (password, isRepeated) => (dispatch) => {
    dispatch({
        type: "BSIGN_SET_PASSWORD",
        password,
        isRepeated
    });
};

export const checkPassword = (currentPassword, currentPasswordRepeated) => {
    if (currentPasswordRepeated) {
        return currentPassword === currentPasswordRepeated;
    } else if (currentPassword === currentPasswordRepeated) {
        return true;
    }

    return true;
}

export const setSignUpFormNotValid = (signUpFormNotValid) => (dispatch) => {
    dispatch({
        type: "BSIGN_SET_SIGN_UP_FORM_NOT_VALID",
        signUpFormNotValid
    });
};