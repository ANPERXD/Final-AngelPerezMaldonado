import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, removeItem } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
        const total = cart.reduce((accumulator, product) => {
            return accumulator + product.price * product.quantity;
        }, 0);
        setCartTotal(total);
    }, [cart]);
    if (totalQuantity === 0) {
        return (
            <div className="Cart-Zero">
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="link-category">
                    Productos
                </Link>
            </div>
        );
    };
    return (
        <div className="cart">
            {cart.map((product) => (
                <CartItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                />
            ))}
            <h3>Total: ${cartTotal}</h3>
            <button onClick={() => clearCart()} className="Button-clear">
                Limpiar Carrito
            </button>
            <Link to="/checkout" className="checkout">
                Finalizar compra
            </Link>
        </div>
    );
};
export default Cart;

