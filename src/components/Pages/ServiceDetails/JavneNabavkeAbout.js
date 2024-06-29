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
                <h3 className="tp-sv__title">Javne Nabavke</h3>
                <p>
                  Pored usluga iz oblasti poslovnog prava, uža specijalnost
                  kancelarije je ostvarivanje interesa ponuđača u postupcima
                  javnih nabavki. U tom cilju za naše klijente preuzimamo
                  vođenje postupka javne nabavke od početka tj. njegove objave
                  sve do završetka postupka, odnosno konačne odluke i izbora
                  najpovoljnijeg ponuđača. Naša kancelarija ima značajno
                  iskustvo kao servis klijentima koji već imaju prisustvo na
                  tržištu javnih nabavki, kao i klijentima koji se bave
                  pružanjem usluga, isporukom roba ili izvođenjem radova u
                  oblastima u kojima ugovorni organi vrše javne nabavke a koji
                  takvo prisustvo žele ostvariti.{" "}
                </p>

                <h4 className="tp-sv__subtitle">
                  Usluge koje pružamo iz oblasti javnih nabavki
                </h4>
                <p>
                  - Podrška kod ispunjenja uslova iz tenderske dokumentacije,{" "}
                  <br />
                  - Priprema ponude u postupku nabavke,
                  <br />
                  - Analiza zakonitosti tenderske dokumentacije ukoliko ponuđač
                  ne ispunjava uslove iz tenderske dokumentacije,
                  <br />
                  - Izjavljivanje žalbe na tendersku dokumentaciju ugovornom
                  organu i KRŽ-u,
                  <br />
                  - Uvid u ponude drugih ponuđača,
                  <br />
                  - Analiza zakonitosti odluka ugovornog organa,
                  <br />
                  - Izjavljivanje žalbe na odluke ugovornog organa,
                  <br />
                  - Savjetovanje Ugovornih organa u izboru vrste postupka,
                  <br />
                  - Podrška u sprovođenju postupka javne nabavke,
                  <br />
                  - Izrada odluka i drugih akata,
                  <br />- Zastupanje pred Sudom BiH povodom konačnih odluka
                  KRŽ-a.
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
