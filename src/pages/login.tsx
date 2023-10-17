import { useNavigate } from "react-router-dom";
import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../config/firebase"

export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async() => {
        const result = await signInWithPopup(auth, provider);
        navigate("/");
    };

    return (
        <div style={{display:"grid", justifyContent: "center"}}>
            <h2>Login to search for Movies!</h2>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
}