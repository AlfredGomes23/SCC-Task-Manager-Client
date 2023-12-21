// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8TJk0bbENI6Enoi0Su7kw8a9UV_fvlMo",
    authDomain: "scc-task-manager.firebaseapp.com",
    projectId: "scc-task-manager",
    storageBucket: "scc-task-manager.appspot.com",
    messagingSenderId: "954951493070",
    appId: "1:954951493070:web:5b77fcdf8255487248779f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;