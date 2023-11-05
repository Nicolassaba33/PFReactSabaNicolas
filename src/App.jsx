import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NoticiasDetailContainer />} />
          <Route path="/stores" element={<StorePage />} />
          <Route path="/stores/:id" element={<ProductDetailContainer />} />
          <Route path="/players" element={<TeamPage />} />{" "}
        </Routes>
        <SponsorsListContainer />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
