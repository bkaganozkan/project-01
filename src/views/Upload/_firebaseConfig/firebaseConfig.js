import firebase from "firebase/app";
import "firebase/firestore";

export const firebaseConfig = {
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
