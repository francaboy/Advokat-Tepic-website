import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import BankarstvoAbout from "./BankarstvoAbout";
import BankarstvoBanner from "./BankarstvoBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const Bankarstvo = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <BankarstvoBanner />
      <BankarstvoAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default Bankarstvo;
