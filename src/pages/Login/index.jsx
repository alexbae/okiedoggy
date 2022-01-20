import { auth } from '../../Firebase/firebaseConfig'
import { useNavigate } from "react-router-dom"
import { signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth"

import { setUserLoginStatus } from '../../utils/userLoginStatus'

const Login = () => {
    const navigate = useNavigate()

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    getRedirectResult(auth)
        .then((result) => {
            console.log('test', result)
            if (result) {
                setUserLoginStatus(true)
                navigate('/')
            }
        })
        .catch((err) => console.log('error', err))

    return (
        <div>
            <button onClick={signInWithGoogle}>Login with Google</button>
        </div>
    )
}

export default Login
