export const signIn = (credencials) => {
    return (dispatch, getState, { getFirebase }) => {
        let firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credencials.email,
            credencials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error });
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
        let firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        })
    }
}

export const signUp = (newUser) => {
return (dispatch, getState, {getFirebase, getFirestore}) => {
    let firebase = getFirebase();
    let firestore = getFirestore();

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
        dispatch({type: 'SIGNUP_SUCCESS'});
    }).catch(error => {
        dispatch({type: 'SIGNUP_ERROR', error});
    })
}
}