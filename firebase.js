import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCoCuHLPRIYgtdSFUdazkL9uEhS6MQfLDI",
    authDomain: "whatsapp-clone-913a2.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-913a2-default-rtdb.firebaseio.com",
    projectId: "whatsapp-clone-913a2",
    storageBucket: "whatsapp-clone-913a2.appspot.com",
    messagingSenderId: "726331529699",
    appId: "1:726331529699:web:428fa38f748e5c83e3a8d6",
    measurementId: "G-LFZEMR8V4D"
  };


const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}