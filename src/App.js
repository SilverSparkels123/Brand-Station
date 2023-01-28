import React from "react";
import { MenuBtnContextProvider } from "./components/contextStore/MenuBtnContext";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SectionPortfolio from "./components/portfolio/SectionPortfolio";
import SectionCategories from "./components/sectionCategories/SectionCategories";
import SectionHotProducts from "./components/sectionHotProducts/SectionHotProducts";
import SectionJoin from "./components/sectionJoin/SectionJoin";
import SectionNewArrivals from "./components/sectionNewArrivals/SectionNewArrivals";
import SectionPopular from "./components/sectionPopular/SectionPopular";
import SectionTopOne from "./components/sectionTop/SectionTopOne";
import SectionTopTwo from "./components/sectionTop/SectionTopTwo";

function App() {
  return (
    <div className="App">
      <MenuBtnContextProvider>
        <Header />
      </MenuBtnContextProvider>
      <SectionTopOne />
      <SectionTopTwo />
      <SectionPopular />
      <SectionCategories />
      <SectionNewArrivals />
      <SectionHotProducts />
      <SectionPortfolio />
      <SectionJoin />
      <Footer />
    </div>
  );
}

export default App;
