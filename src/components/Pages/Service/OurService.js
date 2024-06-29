import React from "react";
import {
  Outsourcing,
  Poslovno,
  Javna,
  Consulting,
  Porezi,
  Radni,
  Partnerstvo,
  Koncesije,
  Bankarstvo,
  Hov,
  Gradjansko,
  Krivicno,
} from "../../HomeTwo/Services";

const OurService = () => {
  return (
    <>
      <div className="tp-service-ara grey-bg-4 pt-140 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center mb-70">
                <span className="tp-section-subtitle mb-30">NAŠE USLUGE</span>
                <h2 className="tp-section-title">
                  Pregledajte vrste usluga koje nudimo za Vas
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Outsourcing
              icon="pe-7s-next-2"
              title="Outsourcing"
              desc="Za klijente koji nemaju potrebu za zapošljavanjem pravnika na puno radno vrijeme."
            />
            <Poslovno
              icon="pe-7s-portfolio"
              title="Poslovno pravo"
              desc="Savjetovanje kod izbora oblika organizovanja privrednih društava u skladu sa potrebama klijenta."
            />
            <Javna
              icon="pe-7s-cash"
              title="Javne nabavke"
              desc="Uža specijalnost kancelarije je ostvarivanje interesa ponuđača u postupcima javnih nabavki."
            />
            <Consulting
              icon="pe-7s-users"
              title="Consulting"
              desc="Obuhvataju različite vrste pravnih analiza i savjetovanja koje pomažu u donošenju poslovnih odluka."
            />
            <Porezi
              icon="pe-7s-piggy"
              title="Porezi"
              desc="Pružamo rješenja poreskih tretmana u bilo kojoj vrsti transakcija."
            />
            <Radni
              icon="pe-7s-chat"
              title="Radni odnosi"
              desc="Brinemo o ostvarivanju svih zakonskih prava i obaveza poslodavaca i radnika."
            />
            <Partnerstvo
              icon="pe-7s-network"
              title="Javno-privatno partnerstvo"
              desc="Vršimo usluge u postupku realizacije javno-privatnog partnerstva."
            />
            <Koncesije
              icon="pe-7s-notebook"
              title="Koncesije"
              desc="Pravna podrška domaćim i stranim društvima u postupku ostvarivanja koncesionog prava."
            />
            <Bankarstvo
              icon="pe-7s-culture"
              title="Bankarstvo i osiguranje"
              desc="Pravna pomoć u svim vrstama bankarskih poslova."
            />
            <Hov
              icon="pe-7s-copy-file"
              title="Tržište HOV"
              desc="Savjetovanje i zastupanje u emisiji hartija od vrijednosti."
            />
            <Gradjansko
              icon="pe-7s-id"
              title="Građansko pravo"
              desc="Stvarno, nasljedno, porodično i obligaciono pravo."
            />
            <Krivicno
              icon="pe-7s-hammer"
              title="Krivično i prekršajno pravo"
              desc="Zastupanje u prekršajnim i krivičnim postupcima."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
