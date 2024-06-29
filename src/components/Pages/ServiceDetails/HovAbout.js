import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const HovAbout = () => {
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
                <h3 className="tp-sv__title">Tržište HOV</h3>
                <p>
                  Savjetovanje i zastupanje u emisiji hartija od vrijednosti, te
                  u postupcima pred nadležnim organima u poslovima HOV (Komisija
                  za HOV, Centralni registar HOV i Berza).{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HovAbout;
