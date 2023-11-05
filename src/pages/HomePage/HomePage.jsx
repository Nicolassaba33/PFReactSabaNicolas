import "./HomePage.css";
import banner from "../../assets/los-pumas-banner.jpg";
import Jaguares from "../../assets/Equipos/Jaguares.svg";
import LasYaguaretes from "../../assets/Equipos/LasYaguaretes_positivo.svg";
import LosPumas from "../../assets/Equipos/LosPumas_positivo.svg";
import Pampas from "../../assets/Equipos/Pampas_positivo.svg";
import Pumas7 from "../../assets/Equipos/Pumas_Seven.svg";
import LosPumitas from "../../assets/Equipos/Pumitas.svg";
import ConectaRugby from "../../assets/ConectaRugby.svg";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="img-container">
        <img src={banner} alt="Equipo De Los Pumas" className="imgBanner" />
        <h1 className="h1Banner">NUESTROS LUCHADORES</h1>
      </div>
      <h2 className="h1Equipo">NUESTROS EQUIPOS</h2>
      <div className="equipos-container">
        <img src={Jaguares} alt="Equipo Los Jaguares" className="imgEquipo" />
        <img
          src={LasYaguaretes}
          alt="Equipo Las Yaguaretes"
          className="imgEquipo"
        />
        <img src={LosPumas} alt="Equipo Los Pumas" className="imgEquipo" />
        <img src={Pampas} alt="Equipo Pampa" className="imgEquipo" />
        <img src={Pumas7} alt="Equipo Los Pumas Seven" className="imgEquipo" />
        <img src={LosPumitas} alt="Equipo Los Pumitas" className="imgEquipo" />
      </div>
      <hr />
      <div className="conectaRugby-container">
        <img src={ConectaRugby} alt="Conecta Rugby" />
        <p>
          Desde la UAR vamos a acompañar a todas aquellas personas que colaboran
          en las Uniones y en los clubes, para que puedan seguir potenciando su
          desarrollo y así avanzar con el enriquecimiento del rugby de base.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
