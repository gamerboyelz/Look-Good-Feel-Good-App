import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utilities/firebase.utils";


function Signin(){

    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return(
        <div>
            <h1>Signin</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup</button>
        </div>
    )
}

export default Signin