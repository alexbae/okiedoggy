import { Routes, Route } from "react-router-dom"

import Me from "./pages/Me"
import Pet from "./pages/Pet"

function App() {
    return (
        <div>
            [notification]
            <Routes>
                <Route path="/" />
                <Route path="/register" />
                <Route path="/login" />
                <Route path="/me" element={<Me />} />
                <Route path="/pet" element={<Pet />} />
                <Route path="/settings" />
            </Routes>
            [navigation]
        </div>
    )
}

export default App
