import { NavLink } from "react-router-dom"

import "./Topbar.css"

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar-inner">
                <span>OkieDoggy</span>
                <NavLink className="navigation-item" to="notification">🔔</NavLink>
            </div>
        </div>
    )
}

export default Topbar
