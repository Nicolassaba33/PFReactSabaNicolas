import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProductDetailContainer from "./components/Product/ProductDetailContainer";
import NoticiasDetailContainer from "./components/Noticias/NoticiasDetailContainer";

//Pages
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import StorePage from "./pages/StorePage/StorePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import SponsorsListContainer from "./components/Sponsors/SponsorsListContainer";
import ProductListContainer from "./components/Product/ProductListContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/noticias/:id" element={<NoticiasDetailContainer />} />
          <Route path="/productos" element={<StorePage />} />
          <Route path="/productos/:id" element={<ProductDetailContainer />} />
          <Route
            path="/productos/:categoria"
            element={<ProductListContainer />}
          />
          <Route path="/worldrugbycup" element={<TeamPage />} />{" "}
        </Routes>
        <SponsorsListContainer />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
