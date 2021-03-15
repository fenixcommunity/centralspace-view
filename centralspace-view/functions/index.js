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
    .document('appLogs/{appLogId}')
    .onCreate(doc => {
        const appLog = doc.data();
        const notification = {
            content: 'Added a new app log',
            user: `${appLog.accountId}`,
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
                const newUser = doc.data();
                const notification = {
                    content: 'Joined new user',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotification(notification);
            });
    })