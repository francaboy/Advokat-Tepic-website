import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const PartnerstvoAbout = () => {
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
                <h3 className="tp-sv__title">Javno-privatno partnerstvo</h3>
                <p>
                  Za potrebe domaćih i stranih investitora, vršimo usluge u
                  postupku realizacije javno-privatnog partnerstva od pokretanja
                  postupka do izbora privatnog partnera.{" "}
                </p>

                <h4 className="tp-sv__subtitle">Usluge iz oblasti JPP</h4>
                <p>
                  - Savjetovanje o mogućim oblastima JPP,
                  <br />
                  - Podnošenja zahtjeva za učešće,
                  <br />
                  - Podnošenja inicijalne ponude,
                  <br />
                  - Savjetovanje i podrška u pregovorima,
                  <br />
                  - Podonošenje konačne ponude,
                  <br />
                  - Uvid u ponude drugih ponuđača,
                  <br />
                  - Izjavljivanje prigovora javnom partneru,
                  <br />
                  - Izjavljivanje žalbe Ministarstvu finansija povodom rješenja
                  javnog partnera,
                  <br />
                  - Zastupanje u upravnom sporu povodom konačnog rješenja
                  Ministarstva finansija,
                  <br />- Zastupanje u postupku za naknadu štete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerstvoAbout;
