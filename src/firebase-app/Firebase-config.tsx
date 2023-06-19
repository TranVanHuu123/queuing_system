import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB6S6JOxhSHdYQZ3qyzSA64-a4Kmt3VZyM",
  authDomain: "thuc-tap-bff29.firebaseapp.com",
  projectId: "thuc-tap-bff29",
  storageBucket: "thuc-tap-bff29.appspot.com",
  messagingSenderId: "158535401821",
  appId: "1:158535401821:web:d425d1f545c48e70bfe8b4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
