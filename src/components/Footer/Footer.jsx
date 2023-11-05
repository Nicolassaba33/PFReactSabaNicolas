import "./Footer.css";
import imgFooter from "../../assets/MarcaUAR_horizontal-negativa.svg";
import iconInstagram from "../../assets/icons8-instagram.svg";
import iconFacebook from "../../assets/icons8-facebook.svg";
const Footer = () => {
  return (
    <div className="Footer">
      <img src={imgFooter} alt="Imagen Footer" />
      <p>©BigCode</p>
      <div className="ul-footer">
        <li>
          <a href="https://www.instagram.com/lospumasuar/?hl=es">
            <img src={iconInstagram} alt="Icono de Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/p/Los-Pumas-100063651515906/">
            <img src={iconFacebook} alt="Icono de Facebook" />
          </a>
        </li>
      </div>
    </div>
  );
};

export default Footer;
