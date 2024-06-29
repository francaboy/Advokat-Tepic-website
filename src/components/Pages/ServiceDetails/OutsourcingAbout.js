import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const OutsourcingsAbout = () => {
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
                <h3 className="tp-sv__title">
                  Eksternalizacija pravnih poslova (Outsourcing)
                </h3>
                <p>
                  Za klijente koji nemaju potrebu za zapošljavanjem pravnika na
                  puno radno vrijeme ili čije je poslovno opredeljenje
                  eksternalizacija pravnih usluga i povjeravanje istih pouzdanoj
                  advokatskoj kancelariji, preuzimamo vršenje pravnih poslova u
                  skladu sa potrebama klijenta.{" "}
                </p>

                <p>
                  To podrazumjeva uključivanje advokata sa pravnog aspekta u
                  svakodnevnom poslovanju klijenta, što isključuje rizik kod
                  donošenja poslovnih odluka koje bi imale štetno dejstvo za
                  klijenta i doprinosi boljim poslovnim rezultatima.
                  Povjeravanjem Vaših pravnih zadataka mi postajemo vaš pravni
                  servis, što Vas oslobađa administrativnih tereta i pomaže Vam
                  u postizanju maksimalne efikasnosti.
                </p>

                <h4 className="tp-sv__subtitle">
                  Vrste eksternalizacija pravnih poslova
                </h4>
                <p>
                  - Pružanje usluga sjedišta društva, <br />
                  - Administrativne usluge, <br />
                  - Uredno pohranjivanje podataka i vođenje arhive (u hard ili
                  elektronskom formatu),
                  <br />
                  - Savjetovanje i podrška sa pravnog aspekta u obavljanju
                  djelatnosti klijenta,
                  <br />- Vršenje pravnih poslova u skladu sa specifičnostima
                  poslovanja svakog klijenta (radni odnosi, javne nabavke,
                  naplata potraživanja, radne dozvole, ugovaranje i dr.).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutsourcingsAbout;
