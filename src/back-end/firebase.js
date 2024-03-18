// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC36X4lNWzrNoowCF8KgAh1y9CC3YidYaM",
  authDomain: "disneyplus-clone-d76be.firebaseapp.com",
  projectId: "disneyplus-clone-d76be",
  storageBucket: "disneyplus-clone-d76be.appspot.com",
  messagingSenderId: "1081935126926",
  appId: "1:1081935126926:web:c27f0557702ad0db7fc4df",
  measurementId: "G-VBGC3KX655"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;