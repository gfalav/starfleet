import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
 
const firebaseConfig = {
  apiKey: "AIzaSyCHYLmuiCdrWDigXLdAZIDqbRTar0s7Ls8",
  authDomain: "starfleet-c91df.firebaseapp.com",
  projectId: "starfleet-c91df",
  storageBucket: "starfleet-c91df.appspot.com",
  messagingSenderId: "665241588806",
  appId: "1:665241588806:web:9c313c9ef1106499362647"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }