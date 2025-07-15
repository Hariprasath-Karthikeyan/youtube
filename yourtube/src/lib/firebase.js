
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTgyWnB-t8nGf9_UBwkzC-S93ycYKkS10",
  authDomain: "fir-f55f0.firebaseapp.com",
  projectId: "fir-f55f0",
  storageBucket: "fir-f55f0.firebasestorage.app",
  messagingSenderId: "590888241689",
  appId: "1:590888241689:web:02c040b8b196ad782bb888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };