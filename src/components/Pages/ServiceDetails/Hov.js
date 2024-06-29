import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import HovAbout from "./HovAbout";
import HovBanner from "./HovBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const Hov = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <HovBanner />
      <HovAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default Hov;
