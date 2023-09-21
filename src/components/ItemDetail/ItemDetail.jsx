import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id, name, price
        }
        addItem(item, quantity)
    };
    return (
        <article className="CardItems">
            <picture className="Pictures">
                <img src={img} alt={name} className="ItemImgs" />
            </picture>
            <div>
                <header className="Headers">
                    <h2 className="ItemHeaders">
                        {name}
                    </h2>
                </header>
                <section className="Container-section">
                    <p className="Infos">
                        Categoria : {category}
                    </p>
                    <p className="Infos">
                        Descripcion : {description}
                    </p>
                    <p className="Infos">
                        Precio: ${price}
                    </p>
                    <p className="Infos">
                        stock: {stock}
                    </p>
                </section>
                <footer className="ItemFooters">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Info-Carts'>Terminar Compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </div>
        </article>
    );
};

export default ItemDetail;