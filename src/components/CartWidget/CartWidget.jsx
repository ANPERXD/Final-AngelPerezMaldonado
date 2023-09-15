import cart from "./assets/cart-shopping-svgrepo-com.svg";

const CartWidget = () => {
    return (
        <div id="cartWidget-Icon">
            <img src={cart} alt="cart" />
            0
        </div>
    )
}

export default CartWidget