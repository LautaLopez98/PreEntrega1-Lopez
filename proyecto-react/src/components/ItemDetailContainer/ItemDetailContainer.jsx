import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import estilos from "../ItemDetailContainer/ItemDetailContainer.module.css"
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../Firebase/client"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    

    const {itemId} = useParams()

    useEffect(() => {
        const docRef = doc(db, "products", itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])

    if (loading){
        return <p>Cargando...</p>
    }
    
    if (!product){
        return <p>No se encontro el producto</p>
    }
    return(
        <div className={estilos.detail}>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer