import estilos from "../ItemDetail/ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, price, img, stock}) => {
    return(
        <div className= {estilos.item}>
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img className= {estilos.imagen} src={img} alt={nombre} />
            </picture>
            <section className={estilos.detail}>
                <p>
                    Precio: {price}
                </p>
                <p>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ("Cantidad agregada:" +  " " + quantity)}/>
            </footer>
            
        </div>
    )
}

export default ItemDetail