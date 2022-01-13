import { Routes, Route } from "react-router-dom"

import Navigation from "./components/Navigation"
import Topbar from "./components/Topbar"

import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Me from "./pages/Me"
import Pet from "./pages/Pet"
import Add from "./pages/Add"
import Shop from "./pages/Shop"
import Notification from "./pages/Notification"
import Settings from "./pages/Settings"

import "./App.css"

function App() {
    return (
        <main>
            <Topbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/me" element={<Me />} />
                <Route path="/pet" element={<Pet />} />
                <Route path="/add" element={<Add />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
            <Navigation />
        </main>
    )
}

export default App
