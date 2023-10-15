import React from "react";
import WhystepOne from '../../assets/assets/images/step-1.svg'
import WhystepTwo from '../../assets/assets/images/step-2.svg'
import WhystepThree from '../../assets/assets/images/step-3.svg'
import WhystepFour from '../../assets/assets/images/step-4.svg'
import {SingleSlider} from '../SingleSlider/SingleSlider';
import aboutOne from '../../assets/images/1.JPG';
import aboutTwo from '../../assets/images/2.JPG';
import aboutThree from '../../assets/images/3.JPG';
import aboutFour from '../../assets/images/4.JPG';
export const WhyChooseUs = () => {
  return (
    <div className="max-w-maxSize mx-auto w-full grid grid-cols-1 lg:grid-cols-3 p-5 lg:p-2 my-10">
      <div className="col-span-1">
        <div className="flex flex-col max-w-[473px] w-full gap-y-3">
          <div>
            <h1 className="text-[3rem] text-black font-bold">Why People</h1>
            <h1 className="text-[4rem] text-black -mt-[30px] font-bold ">
              Choose Us
            </h1>
            <p className="text-black text-[26px] leading-[34px] my-3">
              Adding value, not complication.
            </p>
            <button className=" bg-primary hover:bg-white text-white hover:text-primary border-2 border-primary rounded-[10px] max-w-[228px] px-9 min-h-[46px] mt-5 hover-scale">
              Start Selling Today!
            </button>
          </div>
        </div>
        <div className="rounded-lg h-[400px] mt-5 ">
         <SingleSlider />
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          <div class="col-span-1">
            <div class="choose-steps-block">
              <img
                src={WhystepOne}
                class="img-fluid mr-4 mt-8 hover-scale"
                alt=""
              />
              <div>
                <h2 className="text-primary text-[30px] font-bold mb-3 hover-scale">Free car <br /> Valuation</h2>
                <p>
                  We provide a non - obligation quote for your car, based on
                  physical condition and the market price.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            
            <img
                src={aboutOne}
                class="img-fluid mr-4 mt-8 ml-5 hover-scale"
                alt=""
              />
          </div>

          <div class="col-span-1">
          <img
                src={aboutTwo}
                class="img-fluid mr-4 mt-8 hover-scale"
                alt=""
              />
          </div>
          <div class="col-span-1">
            <div class="choose-steps-block">
              <img
                src={WhystepTwo}
                class="img-fluid mr-4 mt-8 hover-scale"
                alt=""
              />
              <div>
                <h2 className="text-primary text-[30px] font-bold mb-3 hover-scale">Ownership  <br /> Transfer</h2>
                <p>
                  We are authorized by RTA, and our professionals will transfer
                  the car in our office, with no hassles!
                </p>
              </div>
            </div>
          </div>

          <div class="col-span-1">
            <div class="choose-steps-block ">
              <img
                src={WhystepThree}
                class="img-fluid mr-4 mt-8 hover-scale"
                alt=""
              />
              <div>
                <h2 className="text-primary text-[30px] font-bold mb-3 hover-scale">Finance Cleared</h2>
                <p>
                  We will even clear the outstanding <br /> finance on cars and pay difference <br />
                   to customers.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1">
          <img
                src={aboutThree}
                class="img-fluid mr-4 mt-8 hover-scale"
                alt=""
              />
          </div>

          <div class="col-span-1">
          <img
                src={aboutFour}
                class="img-fluid mr-4 mt-8 hover-scale"
                alt=""
              />
          </div>
          <div class="col-span-1">
            <div class="choose-steps-block">
              <img
                src={WhystepFour}
                className="img-fluid mr-4 mt-8 hover-scale"
                alt=""
              />
              <div>
                <h2 className="text-primary text-[30px] font-bold mb-3 hover-scale">Instant Cash</h2>
                <p>
                  In just 30 minutes when you sell your car, you will receive
                  cash, bank transfer or cheque, based on your choice!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
