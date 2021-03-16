import { setAuthenticationAttemptFailed } from "../signinActions";

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

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });
        }).then(() => {
            dispatch({ type: 'FIREBASE_SIGNUP_SUCCESS' });
        }).catch(error => {
            dispatch({ type: 'FIREBASE_SIGNUP_ERROR', error });
        })
    }
}

export const clearAuthError = () => (dispatch) => {
    dispatch({ type: 'FIREBASE_CLEAR_AUTH_ERROR' });
}