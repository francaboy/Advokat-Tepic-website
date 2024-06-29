import React from "react";

import FullScreenBtn from "../common/FullScreenBtn";
import Menu from "../common/Menu/Menu";
import Services from "../HomeTwo/Services";
import TopCategoryHomePageTwo from "../HomeTwo/TopCategoryHomePageTwo";
import Gallery from "../Home/Gallery";
import AboutThree from "./AboutThree";
import BlogThree from "./BlogThree";
import CategoryThree from "./CategoryThree";
import ContactThree from "./ContactThree";
//import PortfolioThree from "./PortfolioThree";
import Feature from "../Home/Feature";
import SliderHomeThree from "./SliderHomeThree";
import FooterTwo from "../common/Footer/FooterTwo";
//import Testimonial from "../common/Testimonial/Testimonial";

const HomeThree = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <SliderHomeThree />
      <AboutThree />
      <Services />
      <TopCategoryHomePageTwo />
      <CategoryThree />
      <FullScreenBtn />
      <Feature />
      <FullScreenBtn />
      <Gallery />
      <FullScreenBtn />
      <ContactThree />
      <BlogThree />
      <FooterTwo />
    </>
  );
};

export default HomeThree;
