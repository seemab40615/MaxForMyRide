import { Link } from "react-router-dom";
import React from "react";
import bannerSrc from "../../assets/assets/Banner.mp4";
export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <video src={bannerSrc} loop autoPlay={true} className=" min-w-[1440px] w-[100vw] " autoFocus={true} muted={true}></video>
      <div className="mt-[60px] absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-[25%] flex xs:flex-col xs:items-center xs:gap-y-4 lg:flex-row justify-between max-w-[1400px] w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-[60px] font-bold text-white leading-[60px] capitalize -tracking-[2px] hover-scale">
            We want to
          </h3>
          <h2 className="text-white text-[70px] font-bold leading-[75px] hover-scale">
            Buy Your Car!
          </h2>
          <p className="text-white text-[28px]">
            No Matter the Make, Model or Miles.
          </p>
        </div>
        <div className="relative z-0 border-[3px] border-[rgba(244,0,0,0.44)] max-w-[450px] w-full rounded-2xl min-h-[250px]">
          <div className="bg-black bg-opacity-20 rounded-2xl p-4 w-full h-full flex flex-col items-center gap-y-4">
            <Link className="font-bold text-[36px] text-white border-b-[3px] border-white leading-[35px]">
              Get an offer now!
            </Link>
            <p className="text-white">Enter: Year, Make, Model, trim or VIN</p>
            <input
              type="text"
              className="py-4 px-2.5 w-full rounded-[5px]"
              autoComplete="off"
              placeholder="Enter your Year | Make | Model | Trim or VIN"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
