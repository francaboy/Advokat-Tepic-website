import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import OutsourcingAbout from "./OutsourcingAbout";
import OutsourcingBanner from "./OutsourcingBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const Outsourcing = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <OutsourcingBanner />
      <OutsourcingAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default Outsourcing;
