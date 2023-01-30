import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utilities/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

function Signin(){

    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return(
        <div>
            <h1>Signin</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup</button>
            <SignUpForm/>
        </div>
    )
}

export default Signin