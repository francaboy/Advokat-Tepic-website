import React from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <>
      {/* <!-- feature area start  --> */}
      <div className="tp-feature-area position-relative">
        <div
          className="tp-fe-bg d-none d-lg-block"
          style={{
            backgroundImage: `url(/assets/img/bg/bg-1.jpg)`,
          }}
        ></div>
        <div className="container-fluid p-0">
          <div className="row g-0 justify-content-end">
            <div className="col-xl-4 col-lg-12 tp-modify-width d-block">
              <div className="tp-section-title-sm-box tp-white-text grey-bg-3 hide-content">
                <span className="tp-section-subtitle-sm">
                  Naša pravna praksa
                </span>
                <h3 className="tp-section-title-sm tp-white-text-sm mb-5">
                  Posvećenost Vašim Potrebama
                </h3>
                <p>
                  Sa fokusom na individualne potrebe svakog klijenta, tu smo da
                  pružimo ličnu pažnju i profesionalnu podršku. Razumijemo
                  koliko je važno imati advokata koji sluša i razumije vaše
                  jedinstvene izazove. Naša posvećenost vašim potrebama
                  osigurava da dobijete pravnu podršku usmjerenu na postizanje
                  najboljih rezultata.
                </p>
                <Link className="tp-btn-sm" to="/usluge">
                  <span>
                    <svg
                      width="36"
                      height="8"
                      viewBox="0 0 36 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="36"
                      height="8"
                      viewBox="0 0 36 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Usluge
                </Link>
              </div>
              <div className="tp-section-title-sm-box tp-white-text black-bg hide-content">
                <span className="tp-section-subtitle-sm">
                  Naša pravna praksa
                </span>
                <h3 className="tp-section-title-sm tp-white-text-sm mb-5">
                  Specijalizacija i iskustvo
                </h3>
                <p>
                  Sa značajnim iskustvom u pružanju pravne pomoći u privrednoj
                  oblasti, imamo duboko razumijevanje pravnih procesa i složenih
                  predmeta. Bez obzira na složenost vaše situacije, možete se
                  osloniti na stručno znanje i posvećenost kako biste se
                  osjećali sigurno i informisani tokom cijelog pravnog procesa.
                </p>
                <Link className="tp-btn-sm" to="/kontakt">
                  <span>
                    <svg
                      width="36"
                      height="8"
                      viewBox="0 0 36 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="36"
                      height="8"
                      viewBox="0 0 36 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- feature area end   --> */}
    </>
  );
};

export default Feature;
