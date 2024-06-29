import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const PoslovnoPravoAbout = () => {
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
                <h3 className="tp-sv__title">Poslovno Pravo</h3>
                <p>
                  Jedna od užih specijalnosti kancelarije je podrška domaćim i
                  stranim privrednim društvima u poslovanju, što podrazumjeva
                  osnivanje istih i stavljanje njihovog poslovanja u zakonske
                  okvire. Na tom putu zadaci kancelarije uključuju širok opseg
                  usluga u samom postupku osnivanja (izbor oblika organizovanja,
                  podrška u izradi akata u postupku osnivanja, zastupanje,
                  izrada internih akata), zatim usluga u vršenju redovne
                  djelatnosti klijenta (izrada ugovora o poslovanju, obavljanje
                  redovnih poslova u ime organa društva, pribavljanje potrebnih
                  dozvola i licenci, statusne promjene i dr.), te naposlijetku
                  obuhvata i usluge prestanka obavljanja djelatnosti (postupak
                  likvidacije ili stečaja).{" "}
                </p>

                <h4 className="tp-sv__subtitle">
                  Usluge iz oblasti poslovnog prava
                </h4>
                <p>
                  - Savjetovanje kod izbora oblika organizovanja privrednih
                  društava i pronalaženje optimalnog rješenja u skladu sa
                  potrebama klijenta, <br />
                  - Osnivanje, upis i registracija svih oblika organizovanja
                  privrednih društava,
                  <br />- Savjetovanje kod izrade osnivačkih akata, statuta,
                  ugovora članova društva i drugih neophodnih akata, izrada{" "}
                  akata za koje nije neophodna notarska obrada ili izrada
                  prijedloga akata za koje je potrebna notarska obrada,
                  <br />
                  - Zastupanje pred notarom prilikom izrade osnivačkih akata,
                  statuta, ugovora članova društva i drugih notarski obrađenih
                  isprava,
                  <br />
                  - Izmjena podataka od značaja za pravni promet i njihova
                  registracija,
                  <br />
                  - Promjena pravne forme privrednih društava,
                  <br />
                  - Statusne promjene privrednih društava (savjetovanje kod
                  izbora optimalnog rješenja i njegovo sprovođenje),
                  <br />
                  - Dokapitalizacija,
                  <br />
                  - Servisiranje potreba d.o.o. i a.d. u skladu sa zakonskom
                  regulativom (vršenje poslova iz nadležnosti skupštine društva
                  ili organa upravljanja i dr.),
                  <br />
                  - Sastavljanje svih vrsta ugovora u privredi,
                  <br />
                  - Izrada internih akata društva, <br /> - Zastupanje u
                  privrednim sporovima,
                  <br />- Sprovođenje postupka likdvidacije i stečaja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoslovnoPravoAbout;
