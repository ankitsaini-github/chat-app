import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGELs1Np28HK0H_jFpOj5AjTyi0KQky48",
  authDomain: "sandesh-chat-app-a97fe.firebaseapp.com",
  projectId: "sandesh-chat-app-a97fe",
  storageBucket: "sandesh-chat-app-a97fe.appspot.com",
  messagingSenderId: "52454416226",
  appId: "1:52454416226:web:f3a7362fd56248234dd63b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth =getAuth();
export const storage = getStorage();
export const db = getFirestore();