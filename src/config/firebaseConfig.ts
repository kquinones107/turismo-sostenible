import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLjDAKzKKFJRCq8aJI8y06D_7VNEIjZVQ",
  authDomain: "turismosostenible-439ff.firebaseapp.com",
  projectId: "turismosostenible-439ff",
  storageBucket: "turismosostenible-439ff.firebasestorage.app",
  messagingSenderId: "766088619614",
  appId: "1:766088619614:web:9c17941b44c654f2d436cf"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);