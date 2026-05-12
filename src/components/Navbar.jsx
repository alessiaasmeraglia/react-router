import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Chi siamo</NavLink>
            <NavLink to="/products">Prodotti</NavLink>
        </nav>
    )
}

export default Navbar;