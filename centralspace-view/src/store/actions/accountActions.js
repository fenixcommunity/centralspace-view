export const createAccount = (account) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to database (pausing dispatch)
        const firestore = getFirestore();
        firestore.collection('accounts').add({
            ...account,
            createdBy: 'maxAdmin',
            adminId: 123,
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
