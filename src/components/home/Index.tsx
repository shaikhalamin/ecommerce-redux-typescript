import React from "react";
import AppNavBar from "../partials/AppNavBar";
import AppJumbotron from "./AppJumbotron";
import ProductsShow from "./ProductsShow";
import HorizontalMenu from "./HorizontalMenu";

const Home: React.FC<{}> = () => (
  <>
    <AppNavBar />
    <AppJumbotron />
    <HorizontalMenu />
    <ProductsShow />

  </>
);

export default Home;
