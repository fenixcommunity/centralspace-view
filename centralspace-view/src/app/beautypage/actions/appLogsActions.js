export const createAppLog = (appLog) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to database (pausing dispatch)
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const profileId = getState().firebase.auth.uid;
        firestore.collection('appLogs').add({
            ...appLog,
            accountId: profileId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'APP_LOG_CREATE', appLog: appLog });
        }).catch((err) => {
            dispatch({type: 'APP_LOG_CREATE_ERROR', err});
        })
    }
}

export const deleteAppLog = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {

        const firestore = getFirestore();
        firestore.collection('appLogs').doc(id).delete().then(() => {
            dispatch({ type: 'APP_LOG_DELETE', id: id });
        }).catch((err) => {
            dispatch({type: 'APP_LOG_DELETE_ERROR', err});
        })
    }
}

