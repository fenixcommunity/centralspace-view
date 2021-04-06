import { setAuthenticationAttemptFailed } from "../signInActions";
import { setRegistrationAttemptFailed } from "../signUpActions";

export const signIn = (data) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const mstepper = document.mstepper;

        firebase.auth().signInWithEmailAndPassword(
            data.email,
            data.password
        ).then(() => {
            dispatch({ type: 'FIREBASE_LOGIN_SUCCESS' });
            dispatch(setAuthenticationAttemptFailed(false));
            if (mstepper) {
                mstepper.correctStep()
            }
            setTimeout(() => {
                data.history.push("/");
            }, 1500)
        }).catch((error) => {
            dispatch({ type: 'FIREBASE_LOGIN_ERROR', error });
            dispatch(setAuthenticationAttemptFailed(true));
            if (mstepper) {
                mstepper.wrongStep();
            }
        })

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log("onAuthStateChanged")
            }
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'FIREBASE_SIGNOUT_SUCCESS' });
        }).catch((error) => {
            dispatch({ type: 'FIREBASE_SIGNOUT_ERROR', error });
        })
    }
}

export const signUp = (newUser, history) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const mstepper = document.mstepper;

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            dispatch(signUpSuccess(history, mstepper))
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });
        }).then(() => {
            dispatch(signUpSuccess(history, mstepper))
        }).catch(error => {
            dispatch({ type: 'FIREBASE_SIGNUP_ERROR', error });
            dispatch(setRegistrationAttemptFailed(true));
            if (mstepper) {
                mstepper.wrongStep();
            }
        })
    }
}

const signUpSuccess = (history, mstepper) => (dispatch) => {
    dispatch({ type: 'FIREBASE_SIGNUP_SUCCESS' });
    dispatch(setRegistrationAttemptFailed(false));
    if (mstepper) {
        mstepper.correctStep()
    }
    setTimeout(() => {
        history.push("/");
    }, 1500)
}

export const clearAuthError = () => (dispatch) => {
    dispatch({ type: 'FIREBASE_CLEAR_AUTH_ERROR' });
}