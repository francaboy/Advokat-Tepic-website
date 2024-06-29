import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import RadniOdnosiAbout from "./RadniOdnosiAbout";
import RadniOdnosiBanner from "./RadniOdnosiBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const RadniOdnosi = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <RadniOdnosiBanner />
      <RadniOdnosiAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default RadniOdnosi;
