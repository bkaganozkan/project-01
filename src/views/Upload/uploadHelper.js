import firebase from "firebase";

export const prepareUploadData = async (circle, objData) => {
  return new Promise(async (resolve) => {
    const db = firebase.firestore();
    (await db.collection(circle).doc(objData.property).get()).exists
      ? null
      : db.collection(circle).doc(objData.property).set({
          property: objData.property,
          propertyColor: objData.propertyColor,
          value: [],
        });
    db.collection(circle)
      .doc(objData.property)
      .update({
        value: firebase.firestore.FieldValue.arrayUnion({
          value: objData.value,
          valueColor: objData.valueColor,
        }),
      });
    resolve(true);
  });
};
