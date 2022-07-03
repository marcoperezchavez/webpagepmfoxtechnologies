import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDSh1ZFpDtYx-b79LSUEZehIC9z8E147js",
    authDomain: "pmfoxtechnologiesf.firebaseapp.com",
    projectId: "pmfoxtechnologiesf",
    storageBucket: "pmfoxtechnologiesf.appspot.com",
    messagingSenderId: "940976786240",
    appId: "1:940976786240:web:baf9e32823be974b1408a5",
    measurementId: "G-L70DVHKSSV"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;