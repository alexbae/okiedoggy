const USER_LOGIN_STATUS = 'od/loginStatus'

export const setUserLoginStatus = (status) => {
    return localStorage.setItem(USER_LOGIN_STATUS, status)
}

export const getUserLoginStatus = () => {
    return localStorage.getItem(USER_LOGIN_STATUS)
}

export const removeUserLoginStatus = () => {
    return localStorage.removeItem(USER_LOGIN_STATUS)
}