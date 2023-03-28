import React from "react";
import "./Slide.scss";
import {cards} from "../../data.js"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({children,slidesToShow,arrowsScroll}) => {
  const settings = {
    dots: false,
    arrows:true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>
       {/* {cards.map(card=>(
        <CategoryCard item={card} key={card.id}/>
       ))} */}
       {children}
        </Slider>
      </div>
   </div>
  );
};

export default Slide;
