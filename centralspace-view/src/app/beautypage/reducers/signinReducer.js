import { LOG_IN_METHOD } from "../../beautypage/config/appConfig"

export const initialState = {
    authenticationAttemptFailed: false,
    signInMethod: null,
    mainTheme: "blue"
};

const signinReducer = (state = initialState, action) => {
    switch (action.type) {

        case "BSIGN_SET_AUTHENTICATION_ATTEMPT_FAILED": {
            const { authenticationAttemptFailed } = action;
            return {
                ...state,
                authenticationAttemptFailed
            };
        }

        case "BSIGN_SIGN_IN_METHOD": {
            const { signInMethod } = action;
            return {
                ...state,
                signInMethod,
                mainTheme: signInMethod === LOG_IN_METHOD.FIREBASE ? "teal lighten-2" : initialState.mainTheme
            };
        }

        case "BSIGN_SWITCH_MAIN_THEME": {
            const { mainThemeColor } = action;
            return {
                ...state,
                mainTheme: mainThemeColor
            };
        }

        default:
            return state;
    }
};

export default signinReducer;
