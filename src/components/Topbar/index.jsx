import { useNavigate, useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { auth } from '../../Firebase/firebaseConfig'
import { signOut } from "firebase/auth"
import { useUser } from '../../Hooks/useUser'

import "./Topbar.css"
import { removeUserLoginStatus } from "../../utils/userLoginStatus"

const Topbar = ({ userLoginStatus }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const userData = useUser()

    const handleSignOut = () => {
        signOut(auth)
            .then((result) => {
                console.log(result)
                removeUserLoginStatus()
                navigate('/login')
            })
            .catch((err) => console.log('error', err))
    }

    const isLoginPage = location.pathname.includes("/login")

    return (
        <div className="topbar">
            <div className="topbar-inner">
                <span>OkieDoggy</span>
                {!isLoginPage && userLoginStatus && userData?.displayName && (
                    <div>
                        <span>{userData.displayName}</span>
                        <NavLink className="navigation-item" to="notification">🔔</NavLink>
                        <button onClick={handleSignOut}>Log out</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Topbar
