import "./TeamPage.css";
import imgTeam from "../../assets/PortadaTeam.avif";
import PhotosListContainer from "../../components/WordCupPhotos/PhotosListContainer";

const TeamPage = () => {
  return (
    <div className="TeamPage">
      <div className="portadaTeam">
        <img src={imgTeam} alt="Equipo Los Pumas" className="imgPortadaTeam" />
        <h1 className="h1PortadaTeam">NUESTROS PUMAS</h1>
      </div>
      <div className="teamBody">
        <PhotosListContainer />
      </div>
    </div>
  );
};

export default TeamPage;
