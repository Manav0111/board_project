import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDbTRrn5meoEpwxLSCuaXEFKOjTkKWfFKo",
  authDomain: "board-pro-2991e.firebaseapp.com",
  projectId: "board-pro-2991e",
  storageBucket: "board-pro-2991e.appspot.com",
  messagingSenderId: "62354459467",
  appId: "1:62354459467:web:b0e33360d8c4aa6792f6ce",
  measurementId: "G-57BTDXX1KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {auth,provider};












