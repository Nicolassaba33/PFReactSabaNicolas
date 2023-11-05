import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, "ProductsPuma");
    getDocs(productosRef).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  return (
    <div>
      <ProductList productos={productos} />
    </div>
  );
};

export default ProductListContainer;

//ItemListContainer es el encargado de llamar el array de productos
