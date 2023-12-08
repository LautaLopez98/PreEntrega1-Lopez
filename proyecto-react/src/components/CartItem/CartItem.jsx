import React from 'react';
import estilos from "./CartItem.module.css"

const CartItem = ({ id, title, price, quantity }) => {
  return (
    <div className={estilos.item}>
      <p>{title}</p>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
    </div>
  );
};

export default CartItem;
