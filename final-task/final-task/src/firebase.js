import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNDG7hyCl2lL5drf-ajdx9bCecwXbfSPw",
  authDomain: "scholarshipappfinal.firebaseapp.com",
  projectId: "scholarshipappfinal",
  storageBucket: "scholarshipappfinal.firebasestorage.app", 
  messagingSenderId: "331631907963",
  appId: "1:331631907963:web:62232f9cd84cd1351b7ede"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 