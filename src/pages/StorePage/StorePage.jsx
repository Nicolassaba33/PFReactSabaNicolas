import "./StorePage.css";
import imgStore from "../../assets/PortadaStore.png";
import ProductListContainer from "../../components/Product/ProductListContainer";
const StorePage = () => {
  return (
    <div className="StorePage">
      <div className="portadaStore">
        <img
          src={imgStore}
          alt="Camisetas del Mundial"
          className="imgPortadaStore"
        />
        <h1 className="h1PortadaStore">Tienda</h1>
      </div>
      <ProductListContainer />
    </div>
  );
};

export default StorePage;
