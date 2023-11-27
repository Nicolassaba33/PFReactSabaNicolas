import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./Noticias.css";
const Noticias = ({ news }) => {
  return (
    <Grid item xs={4} className="gridNews">
      <Link to={`/noticias/${news.id}`} className="DetalleNoticias">
        <Card sx={{ maxWidth: 400, marginTop: 4 }} className="cardNews">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={news.Imagen}
              alt={news.Titulo}
              className="imgNews"
            />
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              className="titleNews"
            >
              {news.Titulo}
            </Typography>
            <CardContent>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                className="dataNews"
              >
                {news.Fecha}
              </Typography>
              <Typography
                variant="h6"
                color="text.primary"
                className="subtitleNews"
              >
                {news.Subtitulo}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default Noticias;
