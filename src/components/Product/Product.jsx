import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ producto }) => {
  return (
    <Grid item xs={4} className="gridProduct">
      <Card className="cardProduct">
        <CardActionArea>
          <CardMedia
            component="img"
            image={producto.Imagen}
            alt={producto.TipoProducto}
            className="imgProduct"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
              className="titleProduct"
            >
              {producto.TipoProducto}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
            >
              ${producto.Precio}
            </Typography>
          </CardContent>
        </CardActionArea>{" "}
        <CardActions>
          <Link to={`/stores/${producto.id}`} className="buttonProduct">
            <Button variant="contained">Ver Producto</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
