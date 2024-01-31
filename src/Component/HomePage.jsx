import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NavbarDropDown from "./NavbarDropDown";
import Carousel from "./Carousel";
import NgoQuote from "./NgoQuote";
import ReadMore from "./ReadMore";
import Collage from "./Collage";
import Donors from "./Donors";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <NavbarDropDown />
      <Carousel />
      <NgoQuote />
      <ReadMore />
      <Collage />

      <Donors />
      <NgoQuote />
      <Footer />
    </>
  );
};

export default HomePage;
