import { useContext } from "react";
import cart from "./assets/cart-shopping.svg";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <Link to='/cart' id="CartWidget" >
            <img src={cart} alt="cart" />
            {totalQuantity}
        </Link>
    );
};

export default CartWidget;