import React from "react";
import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";
import ConsultingAbout from "./ConsultingAbout";
import ConsultingBanner from "./ConsultingBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const Consulting = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <ConsultingBanner />
      <ConsultingAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default Consulting;
