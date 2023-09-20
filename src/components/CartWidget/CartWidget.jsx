import { useContext } from "react";
import cart from "./assets/cart-shopping-svgrepo-com.svg";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    console.log("aca rey!"+totalQuantity)
    
    return (
        <Link to='/cart' className="CartWidget" >
            <img src={cart} alt="cart" />
            {totalQuantity}
        </Link>
    );
};


export default CartWidget;
