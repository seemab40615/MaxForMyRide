import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderOne from '../../assets/assets/images/partner-1.svg';
import SliderTwo from '../../assets/assets/images/partner-2.svg';
import SliderThree from '../../assets/assets/images/partner-3.svg';
import SliderFour from '../../assets/assets/images/partner-4.svg';
import SliderFive from '../../assets/assets/images/partner-5.svg';
import Slidersix from '../../assets/assets/images/partner-6.svg';
import SliderSeven from '../../assets/assets/images/partner-7.svg';
import SliderEight from '../../assets/assets/images/partner-8.svg';
import SliderNine from '../../assets/assets/images/partner-9.svg';
import SliderTen from '../../assets/assets/images/partner-10.svg';

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    Slidersix,
    SliderSeven,
    SliderEight,
    SliderNine,
    SliderTen
    ];
  return (
    <div className="relative max-w-[1440px] mx-auto px-10 py-4 mt-[140px] md:mt-0">
      <div className="absolute -top-10 bg-white rounded-[10px] py-4 px-[30px] text-center left-1/2 transform -translate-x-1/2 max-w-[260px] min-h-[88px]">Sell / Trade / Consign Your:</div>
      <Slider {...settings} key={key}>
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
