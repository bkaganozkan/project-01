import firebase from "firebase/app";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDi68go0LQNTvX7CKe6RoIRRczHdiifgD0",
  authDomain: "bekaoz.firebaseapp.com",
  projectId: "bekaoz",
  storageBucket: "bekaoz.appspot.com",
  messagingSenderId: "1093813577601",
  appId: "1:1093813577601:web:212fa953a2a05858402a80",
  measurementId: "G-SWY9CQFVFK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
