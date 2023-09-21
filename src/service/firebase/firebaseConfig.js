import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCp69APMnFf43yaTVFGkOBISef4OA0w8vo",
  authDomain: "projecto-anper.firebaseapp.com",
  projectId: "projecto-anper",
  storageBucket: "projecto-anper.appspot.com",
  messagingSenderId: "115375218012",
  appId: "1:115375218012:web:490a7da46c7f3ca79f7599",
  measurementId: "G-TSVJRDXFMW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);