import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const JavneNabavkeAbout = () => {
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
                <h3 className="tp-sv__title">Consulting</h3>
                <p>
                  Konsultantske usluge koje pružamo obuhvataju različite vrste
                  pravnih analiza i savjetovanja koje pomažu u donošenju
                  poslovnih odluka kod kupovine preduzeća, poslovnim
                  pregovorima, zaključivanju pravnih poslova, usklađivanju
                  poslovanja sa primjenjivom zakonskom regulativom i pronalaska
                  odgovarajućih pravnih rješenja u složenim situacijama. Pored
                  pravnih konsultantskih usluga u saradnji sa najvećim
                  konsultantskim kućama iz oblasti finansija, predstavljamo
                  servis koji klijentu pruža sveobuhvatnu pravnu, finansijsku i
                  tehničku podršku na jednom mjestu.{" "}
                </p>

                <h4 className="tp-sv__subtitle">Konsultantske usluge</h4>
                <p>
                  - Pravni due diligence,
                  <br />
                  - Izrada pravnih mišljenja i analiza,
                  <br />
                  - Unutrašnja organizacija poslovnih subjekata,
                  <br />
                  - Restrukturisanje,
                  <br />
                  - Priprema klijenata za poslovne pregovore, konsultacije i
                  pružanje pravnih mišljenja u vezi sa zaključivanjem ugovora,
                  <br />
                  - Inicijative za ostvarivanje prava na podsticije prema
                  nadležnim institucijama i organima,
                  <br />- Prijave na Javne pozive raspisane od strane nadležnih
                  institucija i organa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JavneNabavkeAbout;
