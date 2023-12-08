import estilos from './Cart.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'



const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className={estilos.container}>
                <h1>No hay juegos añadidos al carrito</h1>
                <Link to='/' className={estilos.button}>Volver a productos</Link>
            </div>
        )
    }

    return (
        <div className={estilos.container}>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h2 className={estilos.total}>Total: ${total}</h2>
            <div className={estilos.buttons}>
                <button className={estilos.cart} onClick={() => clearCart()}>Vaciar carrito</button>
                <Link to='/checkout' className={estilos.checkout}>Checkout</Link>
            </div>
        </div>
    )

}

export default Cart