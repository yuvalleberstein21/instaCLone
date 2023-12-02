import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDCTv-U50BBDH6BbrHJM5h4Xabq1CcKDBA",
    authDomain: "insta-clone-11d9f.firebaseapp.com",
    projectId: "insta-clone-11d9f",
    storageBucket: "insta-clone-11d9f.appspot.com",
    messagingSenderId: "1075819429295",
    appId: "1:1075819429295:web:9cf1ae8b4015a9af4f835a",
    measurementId: "G-KZLNW869DR"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
