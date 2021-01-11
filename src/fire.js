import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBznFkYo720gpFEfH3ryVeHU7mqixm9Hn4",
    authDomain: "auth-development-7a1e2.firebaseapp.com",
    databaseURL: "https://auth-development-7a1e2.firebaseio.com",
    projectId: "auth-development-7a1e2",
    storageBucket: "auth-development-7a1e2.appspot.com",
    messagingSenderId: "992925046214",
    appId: "1:992925046214:web:416a5c023ea440b0410ec7"
  };
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
export default fire;