import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCpon6ZLiE1JszO9bHbPtjirf5HFaI823Q",
    authDomain: "clone-6324a.firebaseapp.com",
    projectId: "clone-6324a",
    storageBucket: "clone-6324a.appspot.com",
    messagingSenderId: "372153872027",
    appId: "1:372153872027:web:6c0ce0e1c0f7f19c2d203e",
    measurementId: "G-7JZJZ9P6TX"
};

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)

export { auth }