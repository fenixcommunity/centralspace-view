export const createAccount = (account) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to database (pausing dispatch)
        let firestore = getFirestore();
        let profile = getState().firebase.profile;
        let profileId = getState().firebase.auth.uid;
        firestore.collection('accounts').add({
            ...account,
            active: true,
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

export const archiveAccount = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const profileId = getState().firebase.auth.uid;
        firestore.collection('accounts').doc(id).update({
            active: false,
            updatedBy:  `${profile.firstName} ${profile.lastName}`,
            adminId: profileId,
            updatedAt: new Date()
        }).then(() => {
            dispatch({ type: 'ARCHIVE_ACCOUNT', id: id });
        }).catch((err) => {
            dispatch({type: 'ARCHIVE_ACCOUNT_ERROR', err});
        })
    }
}

export const deleteAccount = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {

        const firestore = getFirestore();
        firestore.collection('accounts').doc(id).delete().then(() => {
            dispatch({ type: 'DELETE_ACCOUNT', id: id });
        }).catch((err) => {
            dispatch({type: 'DELETE_ACCOUNT_ERROR', err});
        })
    }
}

