import { NavLink } from "react-router";

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">LUXE</div>

            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">Chi Siamo</NavLink>
                <NavLink to="/products">Prodotti</NavLink>
            </nav>

            <div className="nav-icons">
                <span>⌕</span>
                <span>🛒</span>
                <span>♙</span>
            </div>
        </header>
    )
}

export default Navbar;