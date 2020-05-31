const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// run on firebase server

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    // if collection not exis, firestore add it
    return admin.firestore()
        .collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc));
})


exports.accountCreated = functions.firestore
    .document('accounts/{acccountId}')
    .onCreate(doc => {
        let account = doc.data();
        let notification = {
            content: 'Added a new account',
            user: `${account.createdBy}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })

exports.userJoined = functions.auth
    .user()
    .onCreate(user => {

        return admin.firestore()
            .collection('users')
            .doc(user.uid)
            .get().then(doc => {
                let newUser = doc.data();
                let notification = {
                    content: 'Joined new user',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotification(notification);
            });
    })