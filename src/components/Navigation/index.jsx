import "./Navigation.css"

const Navigation = ({ children }) => {
    return (
        <nav className="navigation">
            <div className="navigation-list">
                {children}
            </div>
        </nav>
    )
}

export default Navigation
