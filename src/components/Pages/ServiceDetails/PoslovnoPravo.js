import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import PoslovnoPravoAbout from "./PoslovnoPravoAbout";
import PoslovnoPravoBanner from "./PoslovnoPravoBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const PoslovnoPravo = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <PoslovnoPravoBanner />
      <PoslovnoPravoAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default PoslovnoPravo;
