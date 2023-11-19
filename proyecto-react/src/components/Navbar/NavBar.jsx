import estilos from "./NavBar.module.css"
import logo from "../Navbar/assets/joystick-2.svg"
import CartWidget from "../CartWidget/CartWidget"
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const NavBar = () => {
  return (
    <BrowserRouter>
      <nav>
        <div className={estilos.navBar}>
          <ul className={estilos.ul}>
            <NavLink to="/" className={estilos.li}><img src={logo} alt="" /></NavLink>
            <NavLink to="/category/PS5" className={estilos.li}>Juegos de PS5</NavLink>
            <NavLink to="/category/PS4" className={estilos.li}>Juegos de PS4</NavLink>
            <NavLink to="/category/PS3" className={estilos.li}>Juegos de PS3</NavLink>
          </ul>
          <div className="cart">
            <CartWidget />
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenido a Game Store" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Selecciona tu juego" />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>

  );
};

export default NavBar 