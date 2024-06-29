import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import MobileMenus from "./MobileMenus";

const OffCanvas = ({ setOffCanvas, isOffCanvas }) => {
  return (
    <>
      <div
        className={`offcanvas__area off-canvas-bg ${
          isOffCanvas ? "opened" : ""
        }`}
        style={{ backgroundImage: `url("assets/img//bg/Sidearea-bg-img.png")` }}
      >
        <div className="offcanvas_area-logo">
          <span className="offcanvas__close-btn">
            <button onClick={() => setOffCanvas(false)}>
              <i className="fal fa-times" />
            </button>
          </span>
        </div>
        <div className="offcanvas-content">
          <div className="offcanvas-subtitle">
            <span>Osnovne informacije</span>
          </div>
          <div className="offcanvas-logo pb-30 pt-30">
            <img src="assets/img/logo/logo.png" alt="" />
          </div>
          <div className="offcanva-details">
            <p>
              Dobrodošli na Advokat Tepić - Vaša destinacija za sve vrste <br />
              pravnih usluga i informacija.
            </p>
          </div>
          <div className="offcanva-btn">
            <Link
              to="/kontakt"
              className="tp-slider-btn mt-40 d-inline-block"
              tabIndex="-1"
            >
              <span>
                <svg
                  width="53"
                  height="8"
                  viewBox="0 0 53 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.3536 4.35356C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464469C48.9763 0.269207 48.6597 0.269207 48.4645 0.464469C48.2692 0.659731 48.2692 0.976314 48.4645 1.17158L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53554C48.6597 7.7308 48.9763 7.7308 49.1716 7.53554L52.3536 4.35356ZM-3.11023e-08 4.5L52 4.5L52 3.5L3.11023e-08 3.5L-3.11023e-08 4.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  width="53"
                  height="8"
                  viewBox="0 0 53 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.3536 4.35356C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464469C48.9763 0.269207 48.6597 0.269207 48.4645 0.464469C48.2692 0.659731 48.2692 0.976314 48.4645 1.17158L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53554C48.6597 7.7308 48.9763 7.7308 49.1716 7.53554L52.3536 4.35356ZM-3.11023e-08 4.5L52 4.5L52 3.5L3.11023e-08 3.5L-3.11023e-08 4.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Kontaktirajte nas
            </Link>
          </div>
        </div>

        <div className="tp-mobile-menu mean-container d-block d-xl-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tp-footer__widget pb-30 offcanvas-ct-info">
          <h3 className="tp-footer__widget-title">Kontakt</h3>
          <ul>
            <li>
              <Link to="#">Vase Pelagića 2, Banja Luka</Link>
            </li>
            <li>
              <Link to="tel:+38766787105">066/787-105</Link>
            </li>
            <li>
              <Link to="mailto:gojkonemanja@advokattepic.com">
                gojkonemanja@advokattepic.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={() => setOffCanvas(false)}
        className={`body-overlay ${isOffCanvas ? "opened" : ""}`}
      ></div>
    </>
  );
};

export default OffCanvas;
