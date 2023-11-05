import "./NewsPage.css";
import imgNews from "../../assets/BannerNews.webp";
import NoticiasListContainer from "../../components/Noticias/NoticiasListContainer";

const NewsPage = () => {
  return (
    <div className="NewsPage">
      <div className="portadaNews">
        <img src={imgNews} alt="Julian Montoya" className="imgPortadaNews" />
        <h1 className="h1PortadaNews">Noticias</h1>
      </div>
      <NoticiasListContainer />
    </div>
  );
};

export default NewsPage;
