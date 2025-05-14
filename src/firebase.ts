import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3lcC8QUZbBS5PPfQQapyWQLJanu1PMEY",
  authDomain: "nwitter-reloaded-e396a.firebaseapp.com",
  projectId: "nwitter-reloaded-e396a",
  storageBucket: "nwitter-reloaded-e396a.firebasestorage.app",
  messagingSenderId: "626006502789",
  appId: "1:626006502789:web:ca6034f3625c84facce8ec"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);