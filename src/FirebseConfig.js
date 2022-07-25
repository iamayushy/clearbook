import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCQng-PBINd9J-LtNgicLUoquaMeW4Y__8",
  authDomain: "clearbook-562b5.firebaseapp.com",
  projectId: "clearbook-562b5",
  storageBucket: "clearbook-562b5.appspot.com",
  messagingSenderId: "164353852528",
  appId: "1:164353852528:web:e1bad4eb530181dadd20b5"
};

const app = initializeApp(firebaseConfig);
const userAuth = getAuth(app)

export {userAuth}
