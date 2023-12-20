import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBETmdrIFG86wLP3cty-2aa_WSwjMkTVb8",
  authDomain: "taskmanager-30574.firebaseapp.com",
  projectId: "taskmanager-30574",
  storageBucket: "taskmanager-30574.appspot.com",
  messagingSenderId: "187743377325",
  appId: "1:187743377325:web:40de74c5911edaf6f13324",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
