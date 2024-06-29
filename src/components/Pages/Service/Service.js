import React from "react";

import Contact from "../../common/Contact/Contact";

import Menu from "../../common/Menu/Menu";

import OurService from "./OurService";
import ServiceAbout from "./ServiceAbout";
import ServiceBanner from "./ServiceBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const Service = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <ServiceBanner />
      <OurService />
      <ServiceAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default Service;
