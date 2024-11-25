import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsAH7GOMW2RJAmD_zI4jqwwOxpmx8_OL4",
  authDomain: "photo-island-eeaa3.firebaseapp.com",
  projectId: "photo-island-eeaa3",
  storageBucket: "photo-island-eeaa3.firebasestorage.app",
  messagingSenderId: "659169089054",
  appId: "1:659169089054:web:4fb5c44156897271e9400f",
  measurementId: "G-82QC750MXJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
