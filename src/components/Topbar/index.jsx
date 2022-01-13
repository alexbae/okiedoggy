import { NavLink } from "react-router-dom"

import "./Topbar.css"

const Topbar = () => {
    return (
        <div className="topbar">
            <span>OkieDoggy</span>
            <NavLink className="navigation-item" to="notification">🔔</NavLink>
        </div>
    )
}

export default Topbar
