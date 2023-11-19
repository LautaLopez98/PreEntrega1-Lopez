import estilos from "./ItemCount.module.css"
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > initial) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={estilos.item}>
      <div className={estilos.quantity}>
        <button className={estilos.decrement} onClick={decrement}>-</button>
        <h2 className={estilos.quantity}>{quantity}</h2>
        <button className={estilos.increment} onClick={increment}>+</button>
      </div>
      <div className={estilos.addToCart}>
        <button onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
