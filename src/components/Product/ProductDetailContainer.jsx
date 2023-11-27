import { useEffect, useState } from "react";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "../../pages/ProductDetail/ProductDetail.css";
const ProductDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const proRef = doc(db, "ProductsPuma", id);
    getDoc(proRef).then((resp) => {
      setProducto({ ...resp.data(), id: resp.id });
    });
  }, [id]);
  return (
    <div className="productDetailContainer">
      {producto && <ProductDetail producto={producto} />}
    </div>
  );
};

export default ProductDetailContainer;
