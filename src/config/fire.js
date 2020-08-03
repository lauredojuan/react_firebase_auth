import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyD_a_efgRqmzhXZPFy-Lkb4qxG_Mij9ZyE",
  authDomain: "react-firebase-auth-dbdd0.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-dbdd0.firebaseio.com",
  projectId: "react-firebase-auth-dbdd0",
  storageBucket: "react-firebase-auth-dbdd0.appspot.com",
  messagingSenderId: "1079593203694",
  appId: "1:1079593203694:web:b9db8ac8700ac6482dc0ff",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
