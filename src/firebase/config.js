import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBVwNR0iwSs8JUKhJ586SbojCqJ6BP2zOg",
  authDomain: "live-chat-b70af.firebaseapp.com",
  projectId: "live-chat-b70af",
  storageBucket: "live-chat-b70af.appspot.com",
  messagingSenderId: "93338520420",
  appId: "1:93338520420:web:f43a4677bd0071534f0871",
};

// initializeApp 
initializeApp(firebaseConfig);

// getAuth
let auth = getAuth();

//init Firestore
let db = getFirestore();

export { auth, db}

