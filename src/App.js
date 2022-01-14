import { Routes, Route, useLocation } from "react-router-dom"
import { getAuth } from 'firebase/auth'

import MainNavigation from "./components/Navigation/MainNavigation"
import Topbar from "./components/Topbar"

import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Me from "./pages/Me"
import Pet from "./pages/Pet"
import Add from "./pages/Add"
import Post from "./pages/Add/Post"
import Shop from "./pages/Shop"
import Notification from "./pages/Notification"
import Settings from "./pages/Settings"

import MainContextProvider from "./contexts/MainContext"

import "./App.css"

function App() {
    const location = useLocation()

    const showNavigation = !location.pathname.includes("/add")

    console.log('test', getAuth().currentUser)

    return (
        <MainContextProvider>
            <main>
                <Topbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/me" element={<Me />} />
                    <Route path="/pet" element={<Pet />} />
                    <Route path="/add">
                        <Route path="" element={<Add />} />
                        <Route path="post" element={<Post />} />
                    </Route>
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
                {showNavigation && <MainNavigation />}
            </main>
        </MainContextProvider>
    )
}

export default App
