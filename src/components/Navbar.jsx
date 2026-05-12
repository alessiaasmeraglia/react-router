import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="link">Home</NavLink> |{" "}
            <NavLink to="/about" className="link">Chi siamo</NavLink> |{" "}
            <NavLink to="/products" className="link">Prodotti</NavLink>
        </nav>
    )
}

export default Navbar;