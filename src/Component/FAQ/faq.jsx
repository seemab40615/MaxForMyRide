import React from "react";
import { FaqAccordion } from '../FaqAccordion/FaqAccordion';
import PhoneIcon from '../../assets/assets/images/icon-phone-red.svg';
import {SingleSlider} from '../SingleSlider/SingleSlider';

export const Faq = () => {
  return (
    <div className="max-w-maxSize mx-auto w-full grid grid-cols-1 lg:grid-cols-3 p-5 lg:p-2 my-10">
      <div className="col-span-1">
        <div className="flex flex-col max-w-[473px] w-full gap-y-3">
          <div id="faq">
            <h1 className="text-[3rem] text-black font-bold">You Have</h1>
            <h1 className="text-[4rem] text-black -mt-[30px] font-bold ">
                
                Questions?
            </h1>
            <p className="text-black text-[26px] leading-[34px] my-3">
            We have Answers
            </p>
           <div className="flex gap-5">
           <button className=" hover-scale bg-primary hover:bg-white text-white hover:text-primary border-2 border-primary rounded-[10px] max-w-[228px] px-9 min-h-[46px] mt-5">
            Ask Us Anything
            </button>
            <button className=" hover-scale hover:bg-primary text-primary hover:text-white border-2 bg-white border-primary rounded-[10px] max-w-[228px] px-9 min-h-[46px] mt-5 flex gap-x-2 items-center">
            <img src={PhoneIcon} alt="" />
            (253) 830-4220
            </button>
           </div>
          </div>
        </div>
        <div className="rounded-lg h-[400px] mt-5 ">
            <SingleSlider />
        </div>
      </div>
      <div className="col-span-2 px-8">
        <FaqAccordion />
      </div>
    </div>
  );
}
