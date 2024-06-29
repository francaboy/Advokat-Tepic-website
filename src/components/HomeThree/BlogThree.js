import React from "react";
import blog from "../../data/blogThree.json";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
const BlogThree = () => {
  return (
    <>
      <div className="tp-blog-area-2 grey-bg-4 fix pb-90">
        <div className="container"></div>
      </div>
    </>
  );
};

export default BlogThree;
