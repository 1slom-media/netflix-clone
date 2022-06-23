import firebase from "firebase/app"
import "firebase/auth";

const config =firebase.initializeApp( {
    apiKey: "AIzaSyAxicC_6YiE2eEAXQKaIczHp8B-Cy5tERI",
    authDomain: "netflix-auth-f22b5.firebaseapp.com",
    projectId: "netflix-auth-f22b5",
    storageBucket: "netflix-auth-f22b5.appspot.com",
    messagingSenderId: "212047936637",
    appId: "1:212047936637:web:0951b92dafbb9035a6c514",
    measurementId: "G-TT4FKVM53L"
});

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;