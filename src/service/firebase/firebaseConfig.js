import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJalNc0p3Q8FlhhQCuUn4ZfV76QEVjkL0",
    authDomain: "proyecto-final-coder-2cb7b.firebaseapp.com",
    projectId: "proyecto-final-coder-2cb7b",
    storageBucket: "proyecto-final-coder-2cb7b.appspot.com",
    messagingSenderId: "948736925499",
    appId: "1:948736925499:web:d4a0a62d34f8903927a11e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)