import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const BankarstvoAbout = () => {
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
                <h3 className="tp-sv__title">Bankarstvo i osiguranje</h3>
                <p>
                  Pravna pomoć u svim vrstama bankarskih poslova, u postupcima
                  ostvarivanja prava iz osiguranja, te usklađivanju sa
                  regulatornim zahtjevima.{" "}
                </p>

                <h4 className="tp-sv__subtitle">
                  Usluge iz oblasti bankarstva i osiguranja
                </h4>
                <p>
                  - Savjetovanje i zastupanje u svim vrstama bankarskih poslova
                  (krediti, garancije, jemstva, finansijski lizing, poslovi
                  unutrašnjeg i međunarodnog platnog prometa i dr.),
                  <br />
                  - Savjetovanje kod zaključivanja pravnog posla (ugovaranja),
                  <br />
                  - Kupovina i prodaja potraživanja (faktoring),
                  <br />
                  - Naplata potraživanja,
                  <br />
                  - Zastupanje u postupcima naknade štete svim vrstama polise
                  osiguranja (osiguranje od autoodgovornosti, osiguranje
                  radnika, osiguranje imovine i dr.),
                  <br />- Zastupanje u sudskim postupcima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankarstvoAbout;
