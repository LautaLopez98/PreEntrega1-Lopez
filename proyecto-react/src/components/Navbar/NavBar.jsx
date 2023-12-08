import estilos from "./NavBar.module.css"
import logo from "../Navbar/assets/joystick-2.svg"
import CartWidget from "../CartWidget/CartWidget"
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";


const NavBar = () => {
  return (
    <BrowserRouter>
      <CartProvider >
        <nav>
          <div className={estilos.navBar}>
            <ul className={estilos.ul}>
              <NavLink to="/" className={estilos.li}><img src={logo} alt="" /></NavLink>
              <NavLink to="/category/PS5" className={estilos.li}>Juegos de PS5</NavLink>
              <NavLink to="/category/PS4" className={estilos.li}>Juegos de PS4</NavLink>
              <NavLink to="/category/PS3" className={estilos.li}>Juegos de PS3</NavLink>
            </ul>
            <div>
              <CartWidget />
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a Game Store" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Selecciona tu juego" />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>

  );
};

export default NavBar 