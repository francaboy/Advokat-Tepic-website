import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import GradjanskoAbout from "./GradjanskoAbout";
import GradjanskoBanner from "./GradjanskoBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const Gradjansko = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <GradjanskoBanner />
      <GradjanskoAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default Gradjansko;
