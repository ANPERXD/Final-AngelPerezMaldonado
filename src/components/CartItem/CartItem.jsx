const CartItem = ({ id, name, price, quantity }) => {
    return (
        <div className="CartItem">
            <div>
                <h3>{name}</h3>
                <p>Precio por unidad: ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${price * quantity}</p>
            </div>
        </div>
    );
};

export default CartItem;