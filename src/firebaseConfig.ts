// filepath: d:\Projects\Memoracy\src\firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFKluGs-HxE2tKt4u3TmVYeu4PqMwe538",
    authDomain: "memoracy.firebaseapp.com",
    projectId: "memoracy",
    storageBucket: "memoracy.firebasestorage.app",
    messagingSenderId: "47184648864",
    appId: "1:47184648864:web:4365a7389d6c6fd87607c5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };