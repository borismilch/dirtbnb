import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBpdz9XXqDYeBqcvFv-Tp_IpzVVK4eG0_A",
  authDomain: "dirt-e72ea.firebaseapp.com",
  projectId: "dirt-e72ea",
  storageBucket: "dirt-e72ea.appspot.com",
  messagingSenderId: "929655261317",
  appId: "1:929655261317:web:455ca2756b353e9ed381ec"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage()