const CartItem = ({ id, img, name, price, quantity }) => {
    return (
        <div className="CartItem">
            <div>
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <p>Precio por unidad: ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${price * quantity}</p>
            </div>
        </div>
    );
};

export default CartItem;