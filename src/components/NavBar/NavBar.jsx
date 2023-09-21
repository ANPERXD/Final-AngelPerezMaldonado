import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav id="NavBar">
            <Link to='/' className="link">
                <h1 id="logo">Ecommerce</h1>
            </Link>
            <div id="Selections">
                <NavLink className="link-category"  to={`/category/celular`}>Celulares</NavLink>
                <NavLink className="link-category" to={`/category/tablet`}>Tablets</NavLink>
                <NavLink className="link-category" to={`/category/notebook`}>Notebooks</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
