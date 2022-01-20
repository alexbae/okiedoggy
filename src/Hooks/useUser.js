import { useState, useEffect } from "react"
import { auth } from '../Firebase/firebaseConfig'

export const useUser = () => {
    const [ userData, setUserData ] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                return setUserData(user)
            }
        })
    }, [])

    return userData
}