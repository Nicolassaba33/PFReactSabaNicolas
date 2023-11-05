import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Inicio
        </Link>
        <Link className="li" to="/news">
          Noticias
        </Link>
        <Link className="li" to="/stores">
          Tienda
        </Link>
        <Link className="li" to="/players">
          Nuestros Jugadores
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
