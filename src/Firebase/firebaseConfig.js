import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAlTVoHqU8InVwSzLZYabyirtuDJDGqHPw",
    authDomain: "okiedoggy-e3bba.firebaseapp.com",
    databaseURL: "https://okiedoggy-e3bba-default-rtdb.firebaseio.com",
    projectId: "okiedoggy-e3bba",
    storageBucket: "okiedoggy-e3bba.appspot.com",
    messagingSenderId: "733652316395",
    appId: "1:733652316395:web:c86313f6e21277b0910eae",
    measurementId: "G-JQVVPL2H5D"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)