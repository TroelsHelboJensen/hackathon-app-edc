// Firebase previously initialized using firebase.initializeApp().
var db = firebase.firestore();
if (location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
}
let col = db.collection('Hackthons');
console.log(col);
col.doc("abc").set({
  name: "Random Hack", author: "me"
});

col.doc("abc").get().then((doc) => {
  if (doc.exists) {
      console.log("Document data:", doc.data());
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
});