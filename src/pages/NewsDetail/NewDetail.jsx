import "./NewDetail.css";
import { Typography } from "@mui/material";

const NewDetail = ({ noticia }) => {
  console.log(noticia);
  return (
    <div className="NewDetail">
      <Typography variant="h4" component="h4">
        {noticia.Subtitulo}
      </Typography>
      <div className="portadaNewsDetail">
        <img src={noticia.Imagen} alt={noticia.Titulo} />
        <Typography variant="body2" component="body2">
          {noticia.Titulo}
        </Typography>
      </div>
      <div className="newsBody">
        <Typography variant="body1" component="body1">
          {noticia.Parrafo}
        </Typography>
      </div>
    </div>
  );
};

export default NewDetail;
