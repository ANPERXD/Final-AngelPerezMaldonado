import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);
    const handleRemoveClick = () => {
        removeItem(id);
    };
    return (
        <div className="CardItem-cart">
            <h3>{name}</h3>
            <p>Precio por unidad: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${price * quantity}</p>
            <button onClick={handleRemoveClick}>Eliminar</button>
        </div>
    );
};

export default CartItem;
