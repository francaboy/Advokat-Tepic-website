import React from "react";
import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <footer>
      <div className="tp-footer__area black-bg">
        <div className="tp-footer">
          {/* <!-- main-footer start  --> */}
          <div className="tp-footer__main">
            <div className="container">
              <div className="tp-footer-border pt-100 pb-70">
                <div className="pb-30 pb-70">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="footer-logo mb-30">
                        <Link to="/" href="#">
                          <img src="/assets/img/logo/logo.svg" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-end">
                      <div className="footer-form-2 mb-30">
                        <form>
                          <input type="email" placeholder="E-mail adresa" />
                          <button type="submit">
                            Pretplatite se{" "}
                            <i className="fal fa-paper-plane"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">
                        Naše usluge
                      </h3>
                      <ul>
                        <li>
                          <a href="#">Outsourcing</a>
                        </li>
                        <li>
                          <a href="#">Poslovno pravo</a>
                        </li>
                        <li>
                          <a href="#">Javne nabavke</a>
                        </li>
                        <li>
                          <a href="#">Consulting</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 ">
                    <div className="tp-footer__widget tp-footer__2  pb-30">
                      <h3 className="tp-footer__widget-title text-white">
                        Brzi linkovi
                      </h3>
                      <ul>
                        <li>
                          <a href="/">Početna</a>
                        </li>
                        <li>
                          <a href="/usluge">Usluge</a>
                        </li>
                        <li>
                          <a href="/klijenti">Klijenti</a>
                        </li>
                        <li>
                          <a href="/kontakt">Kontakt</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2  pb-30">
                      <h3 className="tp-footer__widget-title text-white">
                        Informacije
                      </h3>
                      <ul>
                        <li>
                          <a href="#">Vase Pelagića 2, Banja Luka</a>
                        </li>
                        <li>
                          <a href="tel:+38766787105">066/787-105</a>
                        </li>
                        <li>
                          <a href="mailto:gojkonemanja@advokattepic.com">
                            gojkonemanja@advokattepic.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main footer end  --> */}
        </div>
      </div>

      {/* <!-- footer copy right --> */}
      <div className="top-footer-copyright pt-30 black-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="tp-copyrigh-text mb-30">
                <span>
                  © {new Date().getFullYear()} Advokat Tepić. Sva prava
                  zadržana. Made by <a href="www.srdjanmilosevic.com">Srđan.</a>
                </span>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tp-footer-social-icon mb-30 text-md-end">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer copyright end  --> */}
    </footer>
  );
};

export default FooterThree;
