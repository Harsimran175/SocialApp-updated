import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-1G6GM8eTOvrPeswDVuGEpZeg3fGv3uo",
  authDomain: "socialapp-38a48.firebaseapp.com",
  projectId: "socialapp-38a48",
  storageBucket: "socialapp-38a48.appspot.com",
  messagingSenderId: "15521284111",
  appId: "1:15521284111:web:48726944bf6eaa14dd237a"
  };

 
 if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig); 
  }
  export default firebase.firestore();