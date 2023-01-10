import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import{ getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS9yc1d2r4B9JcEOe04LJsBRBw1xFXFDQ",
  authDomain: "lgfg-clothing.firebaseapp.com",
  projectId: "lgfg-clothing",
  storageBucket: "lgfg-clothing.appspot.com",
  messagingSenderId: "480294653951",
  appId: "1:480294653951:web:9de676a53badb910daa1ca",
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = ()=>{
    return(
        signInWithPopup(auth, provider)
    )  
}

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc ( db, 'users' , userAuth.uid);

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc( userDocRef,{
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message); 
    }
  }
}