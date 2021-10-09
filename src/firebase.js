import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyAH-Gasa5yOH7uW760AtQE8j7KDDxrN9Bg",
  authDomain: "nishweds.firebaseapp.com",
  databaseURL: "https://nishweds-default-rtdb.firebaseio.com",
  projectId: "nishweds",
  storageBucket: "nishweds.appspot.com",
  messagingSenderId: "747948586162",
  appId: "1:747948586162:web:edbbf26b3fccc7392585ab",
  measurementId: "G-MRF5LB15S5"
};

firebase.initializeApp(config);

export default firebase.database();
