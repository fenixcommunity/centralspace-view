import moment from 'moment';
import {
    BrowserView,
    isBrowser,
    isMobile,
    browserName
} from "react-device-detect";
import { ApiCaller, Api } from '../../../beautypage/api/centralspaceApi';
import { setAuthenticationAttemptFailed } from '../signInActions';
import { setRegistrationAttemptFailed } from '../signUpActions';

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

export const signUpToCentralspace = (signUpRequest, history, location, userInfo) => (dispatch) => {
    const absoluteLocation = typeof window !== 'undefined' ? window.location.href : location;
    const { countryName, countryCode } = userInfo;
    moment.locale(countryCode);
    const dateOfRequest = moment(new Date()).toISOString(); // or format "YYYY-MM-DDTHH:mm:ss:SSZ";
    const registerProcess = {
        registerType: "STANDARD",
        requestInfo: { browserInfo: isBrowser ? browserName : "UNKNOWN" },
        filledRegisterForm: {
            firstName: signUpRequest.firstName.value,
            lastName: signUpRequest.lastName.value,
            username: signUpRequest.email.value,
            mail: signUpRequest.email.value,
            password: signUpRequest.password.value,
            roleGroupId: 1, //admin role id -> todo change it
            registerURL: absoluteLocation,
            contactDetails: { country: countryName },
            dateOfRequest: dateOfRequest
        }
    }

    const mstepper = document.mstepper;
    ApiCaller().post(Api.auth.signup, JSON.stringify(registerProcess),
        {
            headers: { 'Content-Type': 'application/json' }
        })
        .then((response) => {
            if (response.status === 200) {
                dispatch(setAuthenticatedInCentralspace(true));
                dispatch(setRegistrationAttemptFailed(false));
                if (mstepper) {
                    mstepper.correctStep()
                }
                setTimeout(() => {
                    history.push("/");
                }, 1500)
            }
        })
        .catch((error) => {
            dispatch(setAuthenticatedInCentralspace(false));
            dispatch(setRegistrationAttemptFailed(true));
            if (mstepper) {
                mstepper.wrongStep();
            }
        });
}

export const setAuthenticatedInCentralspace = (authenticatedInCentralspace) => (dispatch) => {
    dispatch({
        type: "AUTH_SET_AUTHENTICATED_IN_CENTRALSPACE",
        authenticatedInCentralspace
    });
};