import React from "react";

export const Faq = () => {
  return (
    <div className="max-w-maxSize mx-auto w-full grid grid-cols-1 lg:grid-cols-3 p-5 lg:p-2 my-10">
      <div className="col-span-1">
        <div className="flex flex-col max-w-[473px] w-full gap-y-3">
          <div>
            <h1 className="text-[3rem] text-black font-bold">You Have</h1>
            <h1 className="text-[4rem] text-black -mt-[30px] font-bold ">
                
                Questions?
            </h1>
            <p className="text-black text-[26px] leading-[34px] my-3">
            We have Answers
            </p>
           <div className="flex gap-5">
           <button className=" bg-primary text-white border-2 border-primary rounded-[10px] max-w-[228px] px-9 min-h-[46px] mt-5">
            Ask Us Anything
            </button>
            <button className=" bg-primary text-white border-2 border-primary rounded-[10px] max-w-[228px] px-9 min-h-[46px] mt-5">
            <img src="../../assets/assets/images/icon-phone-red.svg" alt="" />
            (253) 830-4220
            </button>
           </div>
          </div>
        </div>
        <div className="bg-primary rounded-lg h-[600px] mt-5 "></div>
      </div>
      <div className="col-span-2">

      </div>
    </div>
  );
}
