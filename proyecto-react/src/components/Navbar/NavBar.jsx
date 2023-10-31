import estilos from "./NavBar.module.css"
import logo from "../Navbar/assets/joystick-2.svg"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <div className={estilos.navBar}> 
                <ul>
                    <a href=""><img src={logo} alt="" /></a>
                    <a href="">Juegos de PC</a>
                    <a href="">Juegos de PS3</a>
                    <a href="">Juegos de PS4</a>
                    <a href="">Juegos de PS5</a>
                </ul>
                <div className="cart">
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar 