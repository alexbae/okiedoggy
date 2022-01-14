import { NavLink } from "react-router-dom"
import Navigation from "."

const MainNavigation = () => {
    return (
        <Navigation>
            <NavLink className="navigation-item" to="/">🏠</NavLink>
            <NavLink className="navigation-item" to="/pet">🐕</NavLink>
            <NavLink className="navigation-item" to="/add">
                <span className="navigation-add-button">➕</span>
            </NavLink>
            <NavLink className="navigation-item" to="/me">👨‍🦰</NavLink>
            <NavLink className="navigation-item" to="/shop">🛍</NavLink>
        </Navigation>
    )
}

export default MainNavigation
