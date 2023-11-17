import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/blog">Le Blog</NavLink>
            <NavLink to="/items">Ajouter un article</NavLink>
        </nav>
    )
}