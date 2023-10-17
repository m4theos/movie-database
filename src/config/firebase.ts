import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3CD2Cqr5rkTUqk2AOkqUSZsvqxyOWVRw",
  authDomain: "react-movie-search-15bf1.firebaseapp.com",
  projectId: "react-movie-search-15bf1",
  storageBucket: "react-movie-search-15bf1.appspot.com",
  messagingSenderId: "861512256757",
  appId: "1:861512256757:web:c7eda42baa2a1e88f3c9bc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);