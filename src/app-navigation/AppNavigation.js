import React from "react";
import { Route, Routes } from "react-router-dom";
// internal
import BackToTop from "../components/BackToTop";
import AnimateMouse from "../components/common/AnimateMouse";
import ContextProvider from "../components/context/ContextProvider";
import Home from "../components/Home/Home";
import HomeThree from "../components/HomeThree/HomeThree";
import HomeTwo from "../components/HomeTwo/HomeTwo";
import About from "../components/Pages/About/About";
import Blog from "../components/Pages/Blog/Blog";
import BlogDetails from "../components/Pages/BlogDetails/BlogDetails";
import ContactUs from "../components/Pages/ContactUs/ContactUs";
import FAQ from "../components/Pages/FAQ/FAQ";
import Portfolio from "../components/Pages/Portfolio/Portfolio";
import PortfolioDetails from "../components/Pages/PortfolioDetails/PortfolioDetails";
import Price from "../components/Pages/Price/Price";
import Service from "../components/Pages/Service/Service";
import Outsourcing from "../components/Pages/ServiceDetails/Outsourcing";
import TeamDetails from "../components/Pages/TeamDetails/TeamDetails";
import TeamPage from "../components/Pages/TeamPage/TeamPage";
import PoslovnoPravo from "../components/Pages/ServiceDetails/PoslovnoPravo";
import JavneNabavke from "../components/Pages/ServiceDetails/JavneNabavke";
import Consulting from "../components/Pages/ServiceDetails/Consulting";
import Porezi from "../components/Pages/ServiceDetails/Porezi";
import RadniOdnosi from "../components/Pages/ServiceDetails/RadniOdnosi";
import Partnerstvo from "../components/Pages/ServiceDetails/Partnerstvo";
import Koncesije from "../components/Pages/ServiceDetails/Koncesije";
import Bankarstvo from "../components/Pages/ServiceDetails/Bankarstvo";
import Hov from "../components/Pages/ServiceDetails/Hov";
import Gradjansko from "../components/Pages/ServiceDetails/Gradjansko";
import Krivicno from "../components/Pages/ServiceDetails/Krivicno";

const AppNavigation = () => {
  return (
    <ContextProvider>
      <AnimateMouse />
      <Routes>
        <Route path="/" element={<HomeThree />} />
        <Route path="/home-2" element={<HomeTwo />} />
        <Route path="/home-3" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/usluge" element={<Service />} />
        <Route path="/outsourcing" element={<Outsourcing />} />
        <Route path="/poslovno-pravo" element={<PoslovnoPravo />} />
        <Route path="/javne-nabavke" element={<JavneNabavke />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/porezi" element={<Porezi />} />
        <Route path="/radni-odnosi" element={<RadniOdnosi />} />
        <Route path="/partnerstvo" element={<Partnerstvo />} />
        <Route path="/koncesije" element={<Koncesije />} />
        <Route path="/bankarstvo" element={<Bankarstvo />} />
        <Route path="/hov" element={<Hov />} />
        <Route path="/gradjansko-pravo" element={<Gradjansko />} />
        <Route path="/krivicno-pravo" element={<Krivicno />} />
        <Route path="/price" element={<Price />} />
        <Route path="/kontakt" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/klijenti" element={<Portfolio />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
      <BackToTop />
    </ContextProvider>
  );
};

export default AppNavigation;
