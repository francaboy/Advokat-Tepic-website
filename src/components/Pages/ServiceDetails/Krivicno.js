import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import KrivicnoAbout from "./KrivicnoAbout";
import KrivicnoBanner from "./KrivicnoBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const Krivicno = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <KrivicnoBanner />
      <KrivicnoAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default Krivicno;
