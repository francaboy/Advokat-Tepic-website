import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const KrivicnoAbout = () => {
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
                <h3 className="tp-sv__title">Krivično pravo</h3>
                <p>
                  Pružamo usluge zastupanja u krivičnim i prekršajnim postupcima
                  sa posebnim aspketom na privrednu oblast, što uključuje
                  sveobuhvatnu podršku pružajući savjete, pripremajući odbranu i
                  zastupajući ih pred nadležnim organima i sudovima. Naš cilj je
                  da obezbjedimo najbolji mogući ishod za naše klijente u skladu
                  sa zakonom.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KrivicnoAbout;
