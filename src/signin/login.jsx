import { signInWithGoogle } from "../firebase/config";
import NetflixLogo from '../components/assets/logo.png';

export const Login=()=>{
    return(
        <div className="login">
            <img src={NetflixLogo} alt="netflix logo"  loading='lazy' />
            <br />
            <button className="login_btn" onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}
