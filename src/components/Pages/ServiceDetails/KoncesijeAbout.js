import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const KoncesijeAbout = () => {
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
                <h3 className="tp-sv__title">Koncesije</h3>
                <p>
                  Kao jedan od vidova pravne podrške prema domaćim i stranim
                  investitorima jesu pravne usluge koje pružamo u postupku
                  ostvarivanja koncesionog prava. To podrazumjeva savjetovanje o
                  mogućem predmetu koncesije i sprovođenju postupka za dodjelu
                  koncesije.{" "}
                </p>

                <h4 className="tp-sv__subtitle">Usluge iz oblasti koncesija</h4>
                <p>
                  - Savjetovanje o mogućim predmetima koncesije,
                  <br />
                  - Zastupanje ili podrška u pregovorima,
                  <br />
                  - Podnošenje inicijative za dodjelu koncesije,
                  <br />
                  - Priprema ponude po objavljenom javnom pozivu za dodjelu
                  koncesije,
                  <br />
                  - Priprema ponude u pregovaračkom postupku,
                  <br />
                  - Podrška u izradi Studije opravdanosti dodjele koncesije,
                  <br />
                  - Uvid u ponude drugih ponuđača,
                  <br />
                  - Zastupanje u upravnom sporu povodom konačnog rješenja
                  koncedenta o izboru najpovoljnijeg ponuđača,
                  <br />- Savjetovanje i podrška u ostvarivanju prava i
                  izvršenju obaveza po zakonu i ugovoru o koncesiji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KoncesijeAbout;
