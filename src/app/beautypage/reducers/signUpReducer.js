import { AUTH_METHOD } from "../config/appConfig"

export const initialState = {
    registrationAttemptFailed: false,
    signUpMethod: null,
    mainTheme: "blue",
    password: "",
    passwordRepeated: "",
    signUpFormNotValid: false
};

const signupReducer = (state = initialState, action) => {
    switch (action.type) {

        case "BSIGN_SET_REGISTRATION_ATTEMPT_FAILED": {
            const { registrationAttemptFailed } = action;
            return {
                ...state,
                registrationAttemptFailed
            };
        }

        case "BSIGN_SIGN_UP_METHOD": {
            const { signUpMethod } = action;
            return {
                ...state,
                signUpMethod,
                mainTheme: signUpMethod === AUTH_METHOD.FIREBASE ? "teal lighten-2" : initialState.mainTheme
            };
        }

        case "BSIGN_SWITCH_MAIN_THEME": {
            const { mainThemeColor } = action;
            return {
                ...state,
                mainTheme: mainThemeColor
            };
        }

        case "BSIGN_SET_PASSWORD": {
            const { password, isRepeated } = action;
            return {
                ...state,
                password: isRepeated ? state.password : password,
                passwordRepeated: isRepeated ? password : state.passwordRepeated
            };
        }

        case "BSIGN_SET_SIGN_UP_FORM_NOT_VALID": {
            const { signUpFormNotValid } = action;
            return {
                ...state,
                signUpFormNotValid
            };
        }

        default:
            return state;
    }
};

export default signupReducer;
