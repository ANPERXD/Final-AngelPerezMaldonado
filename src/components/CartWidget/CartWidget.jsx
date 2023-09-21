import { useContext } from "react";
import emptyCart from "./assets/cart-shopping.svg";
import fullCart from "./assets/cart-shopping-fast-.svg";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    const cartImage = totalQuantity > 0 ? fullCart : emptyCart;
    const cartText = totalQuantity > 0 ? `${totalQuantity}` : '';
    return (
        <Link to='/cart' id="CartWidget">
            <img src={cartImage} alt="cart" />
            <span id="styleCarts">{cartText}</span>
        </Link>
    );
};

export default CartWidget;