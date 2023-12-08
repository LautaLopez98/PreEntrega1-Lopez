import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB4tP57sbzm7A9KMuBom7asth5Q8jIxN8Y",
    authDomain: "ecommerce-coder-b182c.firebaseapp.com",
    projectId: "ecommerce-coder-b182c",
    storageBucket: "ecommerce-coder-b182c.appspot.com",
    messagingSenderId: "406488047861",
    appId: "1:406488047861:web:75224d52a30c71defa65bc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);