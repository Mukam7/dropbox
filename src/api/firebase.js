import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkNbxPXnUkIvCTOEGYJzp9wCOqqHQbcSE",
  authDomain: "mukam-dropbox-b23c6.firebaseapp.com",
  projectId: "mukam-dropbox-b23c6",
  storageBucket: "mukam-dropbox-b23c6.appspot.com",
  messagingSenderId: "997675344892",
  appId: "1:997675344892:web:9392b692782bd5b6750879",
  measurementId: "G-MECM8LW632",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { app, firestore, auth, storage };
