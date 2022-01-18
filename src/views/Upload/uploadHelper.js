import firebase from "firebase";

export const prepareUploadData = () => {
  return new Promise((resolve) => {
    const db = firebase.firestore();
    console.log(db);
    resolve(true)
  });
};
