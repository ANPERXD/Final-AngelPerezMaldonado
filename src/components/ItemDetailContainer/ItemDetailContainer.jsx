import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [ setLoading] = useState(false);
    const { itemId } = useParams();
    useEffect(() => {
        setLoading(true); 
        const docRef = doc(db, 'products', itemId);
        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productsAdapted = { id: response.id, ...data };
                setProduct(productsAdapted);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, [itemId, setLoading]);
    

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    );
};
export default ItemDetailContainer;