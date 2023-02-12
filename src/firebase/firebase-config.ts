import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCkPYD0cg2U80rFJ1qWDf-L1SZDhjMkV2I",
  authDomain: "saylani-store-2e90e.firebaseapp.com",
  projectId: "saylani-store-2e90e",
  storageBucket: "saylani-store-2e90e.appspot.com",
  messagingSenderId: "570042242615",
  appId: "1:570042242615:web:609aa192b1f9afa11c51b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 