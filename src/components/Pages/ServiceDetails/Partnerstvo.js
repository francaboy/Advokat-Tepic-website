import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import PartnerstvoAbout from "./PartnerstvoAbout";
import PartnerstvoBanner from "./PartnerstvoBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const Partnerstvo = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <PartnerstvoBanner />
      <PartnerstvoAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default Partnerstvo;
