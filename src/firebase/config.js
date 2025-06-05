// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAluRZlAY6PnfGo-9uo522v4wBTzIGxE3E",
  authDomain: "restaurant-app2-1bd8c.firebaseapp.com",
  projectId: "restaurant-app2-1bd8c",
  storageBucket: "restaurant-app2-1bd8c.firebasestorage.app",
  messagingSenderId: "679636667740",
  appId: "1:679636667740:web:c3a64bd12b301301f94599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };