import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import KoncesijeAbout from "./KoncesijeAbout";
import KoncesijeBanner from "./KoncesijeBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const Koncesije = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <KoncesijeBanner />
      <KoncesijeAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default Koncesije;
