import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import PoreziAbout from "./PoreziAbout";
import PoreziBanner from "./PoreziBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const Porezi = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <PoreziBanner />
      <PoreziAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default Porezi;
