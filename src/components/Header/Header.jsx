import "./Header.css";
import logo from "../../assets/LogoPuma.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="imgLogo" />
        </Link>
        <h2>LOS PUMAS</h2>
      </div>
    </div>
  );
};

export default Header;
