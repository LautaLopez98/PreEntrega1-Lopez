import { getDoc, doc, addDoc, collection, Timestamp, writeBatch } from 'firebase/firestore';
import { db } from '../../Firebase/client';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import estilos from "../ItemListContainer/ItemListContainer.module.css"

const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        try {
            const gameOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);
            const outOfStock = [];

            for (const productAddedToCart of cart) {
                const productDocRef = doc(db, 'products', productAddedToCart.id);
                const productDoc = await getDoc(productDocRef);

                if (productDoc.exists()) {
                    const stockDb = productDoc.data().stock;
                    const prodQuantity = productAddedToCart.quantity;

                    if (stockDb >= prodQuantity) {
                        batch.update(productDocRef, { stock: stockDb - prodQuantity });
                    } else {
                        outOfStock.push({ id: productDoc.id, ...productDoc.data() });
                    }
                }
            }

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, gameOrder);
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.log("Tenés productos fuera de stock:", outOfStock);
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (orderId) {
        return <h1 className={estilos.loading}>Genial! Gracias por comprar acá. El código de tu orden es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}

export default Checkout;
