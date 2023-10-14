
import Banner from '../../assets/images/slide-1.jpg'
import React from 'react';
export const HeroSection = () => {
  return (
    <>
      <img class="max-w-[100vw]" src={Banner} alt="Max For My Ride" />
      <h3 className="color-white font-lato bold font-[60px]">We want to</h3>
          <h2 className="">Buy Your Car!</h2>
          <p className="white-color">
            No Matter the Make,
            Model or Miles.
          </p>
          <a href="index.html#scroll-top" className="primary-btn">Sell Your Custom Vehicle to Us</a>
     
    </>
  );
};
