import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderOne from '../../assets/images/slide1.png';
import SliderTwo from '../../assets/images/slide2.png';
import SliderThree from '../../assets/images/slide3.png';
import SliderFour from '../../assets/images/slide4.png';
import SliderFive from '../../assets/images/how-left-1.png';
import SliderSix from '../../assets/images/how-left-2.png';
import SliderSeven from '../../assets/images/how-left-3.png';

export const SingleSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
  };
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(Math.random());
  }, []);

  const images = [
    SliderOne,
    SliderTwo,
    SliderThree,
    SliderFour,
    SliderFive,
    SliderSix,
    SliderSeven
    ];
  return (
    <div className="relative max-w-[760px] mx-auto p-10">
      <Slider {...settings} key={key} >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto hover-scale"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
