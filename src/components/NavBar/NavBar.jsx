import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Inicio
        </Link>
        <Link className="li" to="/noticias">
          Noticias
        </Link>
        <Link className="li" to="/productos">
          Productos
        </Link>
        <Link className="li" to="/productos/Indumentaria">
          Indumentaria
        </Link>
        <Link className="li" to="/productos/Accesorios">
          Accesorios
        </Link>
        <Link className="li" to="/worldrugbycup">
          World Cup 2023
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
