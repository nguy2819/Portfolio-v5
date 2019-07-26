 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD9fDz7cOAt-3w11tZf_OOysLaz-X1QzUo",
    authDomain: "tien-borland.firebaseapp.com",
    databaseURL: "https://tien-borland.firebaseio.com",
    projectId: "tien-borland",
    storageBucket: "tien-borland.appspot.com",
    messagingSenderId: "355815608670"
  };
  firebase.initializeApp(config);
//   firebase.firestore().settings({ timestampsInSnapshots: true});
  
  export default firebase;