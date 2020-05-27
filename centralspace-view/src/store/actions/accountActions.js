export const createAccount = (account) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to database (pausing dispatch)
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const profileId = getState().firebase.auth.uid;
        firestore.collection('accounts').add({
            ...account,
            createdBy:  `${profile.firstName} ${profile.lastName}`,
            adminId: profileId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ACCOUNT', account: account });
        }).catch((err) => {
            dispatch({type: 'CREATE_ACCOUNT_ERROR', err});
        })
    }
}

export const deleteAccount = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        dispatch({ type: 'DELETE_ACCOUNT', id: id })
    }
}
