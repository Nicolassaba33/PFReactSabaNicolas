import {
  Button,
  CardActions,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductDetail = ({ producto }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const hideAlertTimeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      return () => {
        clearTimeout(hideAlertTimeout);
      };
    }
  }, [showAlert]);
  return (
    <div className="ProductDetail">
      <img src={producto.Imagen} alt={producto.TipoProducto} />
      <div className="productBody">
        <Typography variant="h4" component="h4">
          {producto.TipoProducto}
        </Typography>
        <Typography variant="body1" component="body1">
          Talle: {producto.Talle}
        </Typography>
        <Typography variant="body1" component="body1">
          ${producto.Precio}
        </Typography>

        <CardActions className="cardButton">
          <Button
            variant="contained"
            size="large"
            endIcon={<ShoppingCartIcon fontSize="large" />}
            onClick={handleButtonClick}
          >
            Comprar
          </Button>
        </CardActions>
        {showAlert && (
          <Alert severity="success" className="alertProduct">
            <AlertTitle>Compra</AlertTitle>
            Realizada con exito <br /> <strong>codigo={producto.id}</strong>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
