import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myartgallery-1ec83.firebaseapp.com",
  projectId: "myartgallery-1ec83",
  storageBucket: "myartgallery-1ec83.appspot.com",
  messagingSenderId: "756207119138",
  appId: "1:756207119138:web:b1f732f05406e38393537b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);