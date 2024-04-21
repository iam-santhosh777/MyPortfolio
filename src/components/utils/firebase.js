// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLGjTOXJ66yOyjufAEgFnNfK4PoofGpHU",
  authDomain: "my-portfolio-webapp-4639e.firebaseapp.com",
  projectId: "my-portfolio-webapp-4639e",
  storageBucket: "my-portfolio-webapp-4639e.appspot.com",
  messagingSenderId: "618234116167",
  appId: "1:618234116167:web:83191e01bc5cc4e97cd962",
  measurementId: "G-361W76QZ7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);