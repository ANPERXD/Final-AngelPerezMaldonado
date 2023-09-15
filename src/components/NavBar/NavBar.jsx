import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
        <nav id="NavBar">
            <h1>Ecommerce</h1>
            <div id="Selections">
                <button className="Button_NavBar">Celulares</button>
                <button className="Button_NavBar">Tablets</button>
                <button className="Button_NavBar">Notebooks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar