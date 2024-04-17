// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, ReactNativeAsyncStorage  } from "firebase/auth"; // Import getAuth
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJua3jxNvkfx6yJrXs-k0Qmpfw0FRWaPQ",
  authDomain: "sales-app-1196e.firebaseapp.com",
  projectId: "sales-app-1196e",
  storageBucket: "sales-app-1196e.appspot.com",
  messagingSenderId: "642625465948",
  appId: "1:642625465948:web:6695b3c81ae09de12f0099",
  measurementId: "G-0H3PV2M9FQ"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);

// Initialize the auth instance
export const firebase_auth = initializeAuth(firebase_app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const firestore_db = getFirestore(firebase_app);

//fix attempt
