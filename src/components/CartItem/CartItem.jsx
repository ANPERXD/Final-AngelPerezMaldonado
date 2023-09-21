const CartItem = ({name, price, quantity }) => {
    return (
        <div className="CartItem">
            <h3>{name}</h3>
            <p>Precio por unidad: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${price * quantity}</p>
        </div>
    );
};

export default CartItem;
