import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import JavneNabavkeAbout from "./JavneNabavkeAbout";
import JavneNabavkeBanner from "./JavneNabavkeBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const JavneNabavke = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <JavneNabavkeBanner />
      <JavneNabavkeAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default JavneNabavke;
