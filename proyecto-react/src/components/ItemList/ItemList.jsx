import Item from "../Item/Item"
import estilos from "../Item/Item.module.css"

const ItemList = ({ games }) => {
    if (games.length === 0) {
        return <p>No hay juegos disponibles.</p>;
    }
    return (
        <div className={estilos.product}>
            {games.map(games => <Item key={games.id} {...games} />)}
        </div>
    )
}

export default ItemList