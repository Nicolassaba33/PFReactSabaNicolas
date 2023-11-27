import React, { useState } from "react";

const ProductCount = () => {
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <div>
      <div className="product-count">
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <button className="agregar-al-carrito">Agregar al carrito</button>
    </div>
  );
};

export default ProductCount;
