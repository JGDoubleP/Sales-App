// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, ReactNativeAsyncStorage  } from "firebase/auth"; // Import getAuth
import { collection, getFirestore, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "INSERT YOUR FIREBASE CONFIG HERE",
  authDomain: "INSERT YOUR FIREBASE CONFIG HERE",
  projectId: "INSERT YOUR FIREBASE CONFIG HERE",
  storageBucket: "INSERT YOUR FIREBASE CONFIG HERE",
  messagingSenderId: "INSERT YOUR FIREBASE CONFIG HERE",
  appId: "INSERT YOUR FIREBASE CONFIG HERE",
  measurementId: "INSERT YOUR FIREBASE CONFIG HERE"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);

// Initialize the auth instance
export const firebase_auth = initializeAuth(firebase_app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const firestore_db = getFirestore(firebase_app);

export const collectionRef = collection(firestore_db, 'activities');

export const firebase_storage = getStorage();

export const uploadToFirebase = async (uri, name, onProgress) => {
  const fetchResponse = await fetch(uri);
  const theBlob = await fetchResponse.blob();

  const imageRef = ref(firebase_storage, `images/${name}`);

  const uploadTask = uploadBytesResumable(imageRef, theBlob);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress && onProgress(progress);
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
        reject(error);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({
          downloadUrl,
          metadata: uploadTask.snapshot.metadata,
          photoname: uploadTask.snapshot.metadata.name,
        });
      }
    );
  });
}

//fix attempt
