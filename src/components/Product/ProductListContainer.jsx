import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;
  console.log(categoria);
  useEffect(() => {
    const productosRef = collection(db, "ProductsPuma");
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;
    getDocs(q).then((resp) => {
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
