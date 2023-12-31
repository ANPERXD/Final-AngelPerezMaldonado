import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, writeBatch, collection, documentId, where, query, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, clearCart } = useContext(CartContext);
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const { docs } = productsAddedFromFirestore;
            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
                if (stockDb >= prodQuantity) {
                    const docRef = doc.ref;
                    batch.update(docRef, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });
            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('Hay productos que están fuera de stock:', outOfStock);
                throw new Error('Productos fuera de stock');
            };
        } catch (error) {
            console.error("Error al crear la orden:", error);
        } finally {
            setLoading(false);
        };
    };
    if (loading) {
        return <h1>Generando orden...</h1>
    };
    if (orderId) {
        return (
            <div className="containerTy">
                <h2 className="thankYou">Gracias por comprar en Ecommerce-Anper</h2>
                <h2 className="orderId">El id de su orden es: {orderId}</h2>
                <p>
                    <Link to="/" className="homeLink">
                        Vuelta al home si lo desea
                    </Link>
                </p>
            </div>
        )
    };
    return (
        <div id="RegisterAcount">
            <h1>Registra tu cuenta</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};
export default Checkout;