import cart from "./assets/carrito.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { NavLink } from "react-router-dom"
import estilos from "./CartWidget.module.css"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <NavLink to="/cart" className={estilos.cart}>
            <img src={cart} alt="cart-widget" />
            {totalQuantity}
        </NavLink>
    )
}
export default CartWidget