import {
    signOut as signOutFirebaseUser,
    signIn as signInToFirebase,
    signUp as signUpToFirebase
} from './firebaseAuthActions';
import {
    signOutCentralspaceUser,
    signInToCentralspace,
    signUpToCentralspace
} from './centralspaceAuthActions';
import { setLoaderLoaded } from '../generalActions';
import { AUTH_METHOD } from "../../../beautypage/config/appConfig";

export const signInUser = (username, password, history) => (dispatch, getState) => {
    const signInMethod = getState().signin.signInMethod;
    dispatch(setLoaderLoaded(true));
    if (signInMethod === AUTH_METHOD.CENTRALSPACE) {
        dispatch(signInToCentralspace(username, password, history));
    } else if (signInMethod === AUTH_METHOD.FIREBASE) {
        dispatch(signInToFirebase({ email: username.value, password: password.value, history }));
    }
}

export const logoutUser = (authenticatedInCentralspace, authenticationInFirebase, history) => (dispatch) => {
    if (authenticatedInCentralspace) {
        dispatch(signOutCentralspaceUser(history))
    } else if (authenticationInFirebase.uid) {
        dispatch(signOutFirebaseUser());
    }
}

export const signUpUser = (signUpRequest, history, location) => (dispatch, getState) => {
    const signUpMethod = getState().signup.signUpMethod;
    dispatch(setLoaderLoaded(true));
    if (signUpMethod === AUTH_METHOD.CENTRALSPACE) {
        const userInfo = getState().userInfo;
        dispatch(signUpToCentralspace(signUpRequest, history, location, userInfo));
    } else if (signUpMethod === AUTH_METHOD.FIREBASE) {
        dispatch(signUpToFirebase({ email: signUpRequest.email.value, password: signUpRequest.password.value}, history));
    }
}