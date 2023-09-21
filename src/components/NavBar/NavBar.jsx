import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div id="NavBarContainer">
            <nav id="NavBar">
                <Link to='/' className="link">
                    <h2 id="logo">Ecommerce-Anper</h2>
                </Link>
                <div id="Selections">
                    <NavLink className="link-category" to={`/category/celular`}>Celulares</NavLink>
                    <NavLink className="link-category" to={`/category/tablet`}>Tablets</NavLink>
                    <NavLink className="link-category" to={`/category/notebook`}>Notebooks</NavLink>
                </div>
                <CartWidget />
            </nav>
        </div>
    );
};

export default NavBar;
