import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div className="Titles">
            <h1>{greeting}</h1>
            {loading ? (
                <iframe
                    src="https://giphy.com/embed/swhRkVYLJDrCE"
                    width="480"
                    height="270"
                    frameBorder="0"
                    title="Cargando..."
                    allowFullScreen
                    className="loading-gif"
                ></iframe>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
