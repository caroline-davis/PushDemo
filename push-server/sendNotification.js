const admin = require('firebase-admin');
const serviceAccount = require('./pushdemo-c7de0-firebase-adminsdk-fbsvc-c6875fc90a.json');
const {registrationToken} = require('./tokens');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const message = {
  notification: {
    title: 'Hello World',
    body: 'This push came from your script ✉️',
  },
  token: registrationToken,
};

admin
  .messaging()
  .send(message)
  .then(response => {
    console.log('✅ Successfully sent message:', response);
  })
  .catch(error => {
    console.error('❌ Error sending message:', error);
  });
