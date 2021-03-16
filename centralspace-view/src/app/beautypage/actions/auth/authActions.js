import { signOut as signOutFirebaseUser, signIn as signInToFirebase } from './firebaseAuthActions';
import { signOutCentralspaceUser, signInToCentralspace } from './centralspaceAuthActions';
import { setLoaderLoaded } from '../generalActions';
import { LOG_IN_METHOD } from "../../../config/appConfig";

export const signInUser = (username, password, history) => (dispatch, getState) => {
    const signInMethod = getState().signin.signInMethod;
    dispatch(setLoaderLoaded(true));
    if (signInMethod === LOG_IN_METHOD.CENTRALSPACE) {
        dispatch(signInToCentralspace(username, password, history));
    } else if (signInMethod === LOG_IN_METHOD.FIREBASE) {
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