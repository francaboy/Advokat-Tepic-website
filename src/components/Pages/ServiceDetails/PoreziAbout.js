import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const PoreziAbout = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <div className="tp-service-page pt-140 pb-140">
        <div className="container">
          <div className="row pb-30">
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/service-blog-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/service-blog-2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-sv__content">
                <h3 className="tp-sv__title">Porezi</h3>
                <p>
                  Za naše klijente pružamo odgovore na upite poreskih tretmana u
                  svakodnevnim i u složenijim transakcijama, uključujući
                  direktne i indirektne poreze, te po zahtjevu klijenta
                  pronalazimo optimalna rješenja koja su u skladu sa poreskom
                  regulativom. U slučajevima kontrole nadležnih poreskih organa,
                  klijentima pružamo podršku u smislu prisustva samom postupku
                  kontrole kako bi se pobrinuli da isti bude u skladu sa
                  zakonom, vršimo komunikaciju u ime klijenta sa nadležnim
                  organima, te zastupamo klijenta u postupcima pred nadležnim
                  organima i sudom nakon odluke poreskih organa.{" "}
                </p>

                <h4 className="tp-sv__subtitle">Usluge iz oblasti poreza</h4>
                <p>
                  - Izrada mišljenja i analiza o poreskom tretmanu, te
                  pronalaženje optimalnog rješenja u skladu sa zahtjevom
                  klijenta, <br />- Podrška u postupku kontrole nadležnih
                  poreskih organa, <br />
                  - Podnošenje poreskih prijava za koje je potrebno ovlašćenje
                  advokatu,
                  <br />
                  - Reprogram poreskih obaveza,
                  <br />
                  - Obavezne registracije pred organom nadležnim za direktne
                  poreze,
                  <br />
                  - PDV registracija,
                  <br />
                  - Žalbe na odluke poreskih organa,
                  <br />- Zastupanje pred nadležnim sudom povodom konačnih
                  odluka poreskih organa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoreziAbout;
