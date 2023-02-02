import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utilities/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.component.scss"


function Authentication(){

    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return(
        <div className="authentication-container">
           <SignInForm/>
           <SignUpForm/>
        </div>
    )
}

export default Authentication