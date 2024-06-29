import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const GradjanskoAbout = () => {
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
                <h3 className="tp-sv__title">Građansko pravo</h3>
                <p>
                  Naša kancelarija pruža sveobuhvatne usluge u oblastima
                  stvarnog, nasljednog, porodičnog i obligacionog prava. U
                  oblasti stvarnog prava, pružamo savete i pravnu podršku u vezi
                  sa nekretninama, vlasničkim pravima, zakupom i drugim
                  imovinskim pitanjima. U nasljednom pravu, pomažemo našim
                  klijentima u planiranju nasledstva, izradi testamenata,
                  postupcima nasleđivanja i rješavanju sporova. Porodično pravo
                  obuhvata sve aspekte porodičnih odnosa, uključujući razvod
                  braka, starateljstvo, alimentaciju i sporazumno rješavanje
                  sukoba. Obligaciono pravo se odnosi na ugovorne obaveze i
                  odgovornosti, gde pružamo savjete, pripremamo ugovore i
                  zastupamo klijente u sporovima.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GradjanskoAbout;
