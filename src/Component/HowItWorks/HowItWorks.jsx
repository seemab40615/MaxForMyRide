import React from "react";
import HowOne from '../../assets/assets/images/how-1.svg';
import HowTwo from '../../assets/assets/images/how-2.svg';
import HowThree from '../../assets/assets/images/how-3.svg';
export const HowItWorks = () => {
  return (
    <div className="max-w-maxSize mx-auto w-full grid grid-cols-1 lg:grid-cols-3 p-5 lg:p-2 my-10">
      <div className="grid col-span-1">
        <div className="flex flex-col max-w-[473px] w-full gap-y-3">
          <div>
            <h1 className="text-[3rem] text-black font-bold">See</h1>
            <h1 className="text-[4rem] text-black -mt-[30px] font-bold ">
             How It Works
            </h1>
            <p className="text-black text-[26px] leading-[34px] my-3">
            Trade in or sell your vehicle to us in just a few easy steps
            </p>
            <button className=" bg-primary hover:bg-white text-white hover:text-primary border-2 border-primary rounded-[10px] max-w-[228px] px-9 min-h-[46px] mt-5 hover-scale">
            Start Selling Today!
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="col-span-1 px-4 py-6 rounded-[10px] bg-white shadow-xl hover-scale">
            <h2 className=" text-primary text-[28px] font-bold">
              GET
              <br />
              YOUR OFFER
            </h2>
            <p className=" text-black text-[20px] my-2 font-medium">
              Share a few details and we’ll provide a express cash offer in
              about 2 minutes.
            </p>
            <img
              src={HowOne}
              class="img-fluid"
              alt=""
            />
          </div>
          <div className="col-span-1 px-4 py-6 rounded-[10px] bg-white shadow-xl hover-scale">
            <h2 className=" text-primary text-[28px] font-bold ">
            TRADE
                                                <br />
                                                OR SELL
            </h2>
            <p className=" text-black text-[20px] my-2 font-medium">
            Trade in your old vehicle for a new one, or sell it to us, either way we want to buy.
            </p>
            <img
              src={HowTwo}
              class="img-fluid"
              alt=""
            />
          </div>
          <div className="col-span-1 px-4 py-6 rounded-[10px] bg-white shadow-xl hover-scale">
            <h2 className=" text-primary text-[28px] font-bold ">
            GET
                                                <br />
                                                Check
            </h2>
            <p className=" text-black text-[20px] my-2">
            Share a few details and we’ll provide a express cash offer in
              about 2 minutes.
            </p>
            <img
              src={HowThree}
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
