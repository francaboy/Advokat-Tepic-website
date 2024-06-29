import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const RadniOdnosi = () => {
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
                <h3 className="tp-sv__title">Radni odnosi</h3>
                <p>
                  Za naše klijente brinemo o ostvarivanju prava i obaveza kako
                  poslodavaca tako i radnika. U tom cilju, našim klijentima
                  pružamo usluge pravne podrške prilikom zasnivanja radnih
                  odnosa, ostvarivanju prava i obaveza iz radnog odnosa i
                  prilikom prestanka radnog odnosa, te internog uređenja ove
                  oblasti u skladu sa zakonskim normama. Pored navedenog,
                  značajno iskustvo kancelarije je servis klijentima tj.
                  zastupanje i podrška u postupku zapošljavanja radnika koji
                  nisu državljani BiH, već državljani zemalja viznog ili
                  bezviznog režima.{" "}
                </p>

                <h4 className="tp-sv__subtitle">
                  Usluge iz oblasti radnih odnosa
                </h4>
                <p>
                  - Zastupanje u postupcima izdavanja radne dozvole, <br />
                  - Savjetovanje i podrška u procesu dobijanja Vize, <br />
                  - Zastupanje u postupku odobrenja privremenog boravka, <br />
                  - Pravna pomoć kod angažovanja radnika za rad u radnom odnosu
                  ili rad van radnog odnosa, <br />
                  - Izrada odgovarajućeg ugovora o radu ili angažovanju, <br />
                  - Podrška i savjetovanje u disciplinskom postupku, <br />
                  - Izrada svih vrsta internih akata (Pravilnika o organizaciji
                  i sistematizaciji, Pravilnika o radu, Pravilnika o
                  disciplinskog odgovornosti radnika i dr.), <br />
                  - Izrada svih vrsta rješenja i odluka, <br />
                  - Pravna pomoć kod prestanka radnog odnosa (savjetovanje radi
                  zakonitog prestanka radnog odnosa, vođenje kroz postupak
                  otkazivanja ugovora o radu), <br />- Zastupanje u radnim
                  sporovima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadniOdnosi;
