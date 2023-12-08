import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../Firebase/client';
import ItemList from '../ItemList/ItemList';
import estilos from '../ItemListContainer/ItemListContainer.module.css'

const ItemListContainer = ({ greeting }) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            let productsCollection;

            if (categoryId) {
                const q = query(collection(db, 'products'), where('category', '==', categoryId));
                productsCollection = await getDocs(q);
            } else {
                productsCollection = await getDocs(collection(db, 'products'));
            }

            const products = productsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setGames(products);
            setLoading(false);
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <div>
            {loading ? (
                <p className={estilos.loading}>Cargando...</p>
            ) : (
                <>
                    <h1>{greeting}</h1>
                    <ItemList games={games} />
                </>
            )}
        </div>
    );
};

export default ItemListContainer;
