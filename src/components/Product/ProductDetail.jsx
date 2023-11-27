import { useContext, useState } from "react";
import ProductCount from "./ProductCount";
import { CartContext } from "../../context/CartContext";

const ProductDetail = ({ producto }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < producto.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={producto.img} alt={producto.titulo} />
        <div>
          <h3 className="titulo">{producto.titulo}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
