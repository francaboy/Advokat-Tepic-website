import React from "react";
import { Link } from "react-router-dom";

// portfolio items
const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/project/item-1.jpg",

    title: "Grant Thornton d.o.o. Banja Luka",
  },
  {
    id: 2,
    img: "/assets/img/project/item-2.jpg",

    title: "Ekonomski insitut d.o.o. Banja Luka",
  },
  {
    id: 3,
    img: "/assets/img/project/item-3.jpg",

    title: "TWC d.o.o. Banja Luka",
  },
  {
    id: 4,
    img: "/assets/img/project/item-4.jpg",

    title: "Marigold d.o.o. Banja Luka",
  },
  {
    id: 5,
    img: "/assets/img/project/item-5.jpg",

    title: "Mint d.o.o. Banja Luka",
  },
  {
    id: 6,
    img: "/assets/img/project/item-6.jpg",

    title: "Red Box Media d.o.o. Banja Luka",
  },
  {
    id: 7,
    img: "/assets/img/project/item-10.jpg",

    title: "Dunav osiguranje a.d Banja Luka",
  },
  {
    id: 8,
    img: "/assets/img/project/item-11.jpg",

    title: "Krajina osiguranje a.d. Banja Luka",
  },
  {
    id: 9,
    img: "/assets/img/project/item-12.jpg",

    title: "Bijeljinaput d.o.o. Bijeljina",
  },
  {
    id: 10,
    img: "/assets/img/project/item-13.jpg",

    title: "EK DS d.o.o. Banja Luka",
  },
  {
    id: 11,
    img: "/assets/img/project/item-14.jpg",

    title: "ONB HR d.o.o. Banja Luka",
  },
  {
    id: 12,
    img: "/assets/img/project/item-15.jpg",

    title: "SEPL d.o.o. Banja Luka",
  },
  {
    id: 13,
    img: "/assets/img/project/item-16.jpg",

    title: "KJP Centar Skenderija",
  },
  {
    id: 14,
    img: "/assets/img/project/item-17.jpg",

    title: "Mubea BH d.o.o. Banja Luka ",
  },
];

const PortfolioItems = () => {
  return (
    <>
      <div className="project-page-list pt-140 pb-90">
        <div className="container">
          <div className="row">
            {portfolio_data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-12">
                <div className="pj-list-item mb-50">
                  <div className="pj-list__img">
                    <img src={item.img} alt="" />
                  </div>
                  <span>
                    <a href="#">{item.tag}</a>
                  </span>
                  <h4 className="pj-list__title">
                    <Link to="#">{item.title}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItems;
