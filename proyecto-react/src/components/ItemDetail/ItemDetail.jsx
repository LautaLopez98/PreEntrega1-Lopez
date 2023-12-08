import estilos from "../ItemDetail/ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"

import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, title, price, img, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id, title, price
        }

        addItem(item, quantity)
    }
    return(
        <div className= {estilos.item}>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <picture>
                <img className= {estilos.imagen} src={img} alt={title} />
            </picture>
            <section className={estilos.detail}>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart'className={estilos.button}>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
            
        </div>
    )
}

export default ItemDetail