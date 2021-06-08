import firebase from 'firebase'

require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCQRgLGpFOJ2m8-MKJ0hYGRWfs9_Grfcww",
    authDomain: "barter-app-dd8a3.firebaseapp.com",
    projectId: "barter-app-dd8a3",
    storageBucket: "barter-app-dd8a3.appspot.com",
    messagingSenderId: "536884406502",
    appId: "1:536884406502:web:d7ebed4727b55b3070f327"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()