import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((accumulator, product) => {
            return accumulator + product.price * product.quantity;
        }, 0);

        setCartTotal(total);
    }, [cart]);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Option">
                    Productos
                </Link>
            </div>
        );
    }

    return (
        <div>
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
            <button onClick={() => clearCart()} className="Button">
                Limpiar Carrito
            </button>
            <Link to="/checkout" className="Option">
                Checkout
            </Link>
        </div>
    );
};

export default Cart;

