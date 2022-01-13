import { NavLink } from "react-router-dom"

import "./Navigation.css"

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation-list">
                <NavLink className="navigation-item" to="/">🏠</NavLink>
                <NavLink className="navigation-item" to="/pet">🐕</NavLink>
                <NavLink className="navigation-item" to="/add">
                    <span className="navigation-add-button">➕</span>
                </NavLink>
                <NavLink className="navigation-item" to="/me">👨‍🦰</NavLink>
                <NavLink className="navigation-item" to="/shop">🛍</NavLink>
            </div>
        </nav>
    )
}

export default Navigation
