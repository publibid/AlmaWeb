// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD_NXir7AfVReGtVnVfIpdUQa7EVvtfEk",
  authDomain: "almaweb-84a8f.firebaseapp.com",
  databaseURL: "https://almaweb-84a8f-default-rtdb.firebaseio.com",
  projectId: "almaweb-84a8f",
  storageBucket: "almaweb-84a8f.appspot.com",
  messagingSenderId: "415102273909",
  appId: "1:415102273909:web:26d7543235e00fb37dab3c",
  measurementId: "G-8NQETTVG8D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const analytics = getAnalytics(app);
export {app,database};