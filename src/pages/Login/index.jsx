import { auth } from '../../Firebase/firebaseConfig'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const Login = () => {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => console.log(result))
            .catch((err) => console.log('error', err))
    }

    return (
        <div>
            <button onClick={signInWithGoogle}>Login with Google</button>
        </div>
    )
}

export default Login
