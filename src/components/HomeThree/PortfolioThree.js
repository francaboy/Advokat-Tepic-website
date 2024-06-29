import { useState } from "react";
import ImagePopup from "../common/Modals/ImagePopup";

// portfolio_data
const portfolio_data = [
  {
    index: 0,
    img: "/assets/img/project/project-1.jpg",
    tag: "Business",
    category: "Revizorske kuće",
  },
  {
    index: 1,
    img: "/assets/img/project/project-2.jpg",
    tag: "Data Analysis",
    category: "agencije",
    col: "6",
  },
  {
    index: 2,
    img: "/assets/img/project/project-3.jpg",
    tag: "Business",
    category: "agencije",
    col: "6",
    mb: "30",
  },
  {
    index: 3,
    img: "/assets/img/project/project-4.jpg",
    tag: "Product Design",
    category: "firme",
    col: "12",
  },
];
// categories
const categories = [
  "Svi klijenti",
  ...new Set(portfolio_data.map((item) => item.category)),
];

const PortfolioThree = () => {
  const [isActive, setIsActive] = useState("Svi klijenti");
  const [portfolioItems, setPortfolioItems] = useState(portfolio_data);

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const images = [...new Set(portfolio_data.map((item) => item.img))];

  // handle portfolio data
  const handlePortfolioData = (category) => {
    setIsActive(category);
    if (category === "Svi klijenti") {
      setPortfolioItems(portfolio_data);
    } else {
      setPortfolioItems(
        portfolio_data.filter((item) => item.category === category)
      );
    }
  };
  return (
    <>
      {/* <!-- portfolio area start  --> */}
      <div className="tp-portfolio-area">
        <div className="container p-0">
          <div className="tp-portfolio-header mb-70">
            <div className="row align-items-center g-0">
              <div className="col-lg-5 col-12">
                <div className="tp-portfolio-info">
                  <div className="tp-portfolio-subtitle mb-15">
                    <span>Klijenti i partnerstva</span>
                  </div>
                  <h3 className="tp-portfolio-title">Naši klijenti</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row tp-portfolio-active">
            {portfolioItems
              .filter((item) => item.category === "Revizorske kuće")
              .map((item) => (
                <div
                  key={item.index}
                  className="col-lg-4 tp-portfolio-item w-img"
                >
                  <div className="fix">
                    <button
                      onClick={() => handleImagePopup(item.index)}
                      className="project-gSvi klijentiery-image"
                    >
                      <img src={item.img} alt="" />
                    </button>
                  </div>
                  <div className="portfolio-tag">
                    <a href="#">
                      <span>Business</span>
                    </a>
                  </div>
                </div>
              ))}

            <div className="col-lg-8">
              <div className="row">
                {portfolioItems
                  .filter((item) => item.category !== "Revizorske kuće")
                  .map((item, i) => (
                    <div
                      key={i}
                      className={`col-lg-${item.col} tp-portfolio-item w-img mb-${item.mb}`}
                    >
                      <div className="fix">
                        <button
                          onClick={() => handleImagePopup(item.index)}
                          href="#"
                          className="project-gSvi klijentiery-image"
                        >
                          <img src={item.img} alt="" />
                        </button>
                      </div>
                      <div className="portfolio-tag">
                        <a href="#">
                          <span>ADVOKAT TEPIĆ</span>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="text-center mb-reset mt-70 mb-140">
            <a href="/klijenti" className="tp-btn-border">
              Više klijenata
              <span>
                <svg
                  width="22"
                  height="8"
                  viewBox="0 0 22 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  width="22"
                  height="8"
                  viewBox="0 0 22 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- portfolio area end  --> */}

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default PortfolioThree;
