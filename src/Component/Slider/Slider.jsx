import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(Math.random());
  }, []);

  const images = [
    "https://placekitten.com/136/136",
    "https://placekitten.com/137/137",
    "https://placekitten.com/138/138",
    "https://placekitten.com/139/139",
    "https://placekitten.com/140/140",
    "https://placekitten.com/141/141",
    "https://placekitten.com/142/142",
    "https://placekitten.com/143/143",
    "https://placekitten.com/144/144",
    "https://placekitten.com/144/144",
    "https://placekitten.com/144/144",
  ];
  return (
    <div className="relative max-w-[1440px] mx-auto p-10">
      <div className="absolute -top-10 bg-white rounded-[10px] py-4 px-[30px] text-center left-1/2 transform -translate-x-1/2 max-w-[260px] min-h-[88px]">Sell / Trade / Consign Your:</div>
      <Slider {...settings} key={key}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
