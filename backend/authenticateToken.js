const admin = require('firebase-admin');
const serviceAccount =require('./serviceAccount.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://auth-development-7a1e2.firebaseio.com',
});
async function decodeIDToken(req, res, next) {
  //const header = req.headers?.authorization;
  if (header !== 'Bearer null') {
const idToken = req.headers.authorization.split('Bearer ')[1];
try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req['currentUser'] = decodedToken;
    } catch (err) {
      console.log(err);
    }
  }
next();
}
module.exports = decodeIDToken;
/*var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://auth-development-7a1e2.firebaseio.com"
});*/