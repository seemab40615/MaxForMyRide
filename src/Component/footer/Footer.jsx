import React from "react";
export const Footer = () => {
  return (
    <>
      <div className="bg-primary min-h-[576px] pt-[84px]">
        <div className="max-w-maxSize flex mx-auto xs:flex-col lg:flex-row justify-between">
          <div className="flex flex-col md:max-w-[473px] w-full gap-y-3 justify-center md:justify-start items-center md:items-start mb-[90px] md:mb-2">
            <div>
              <h1 className="text-[3rem] text-white font-bold">Get In Touch</h1>
              <h1 className="text-[4rem] text-white -mt-[30px] font-bold">
                With Us
              </h1>
            </div>
            <p className="text-white text-[26px] leading-[34px]">
              Champion Auto Events
            </p>
            <div>
              <p className="text-white text-[26px] leading-[34px]">
                Spokane, WA 99208
              </p>
              <p className="text-white text-[26px] leading-[34px]">
                Sales: 253 830-4220
              </p>
            </div>
            <button className="hover-scale bg-darkPrimary text-white hover:text-primary border-2 border-darkPrimary rounded-[10px] max-w-[190px] px-9 min-h-[46px] mt-5">
              Get Directions
            </button>
          </div>
          <div className="footer-bg max-w-[946px] min-h-[454px] w-full flex justify-center">
            <iframe
              title="MaxRideLocation"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21474.10047406343!2d-117.41175400000002!3d47.718153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e1952de500001%3A0x9401c821c6c44842!2sMax%20For%20My%20Ride!5e0!3m2!1sen!2sus!4v1697268372671!5m2!1sen!2sus"
              width="600"
              height="454"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ marginTop: "-42px" }}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="max-w-maxSize mx-auto flex justify-between">
          <p>© 2023 MAX FOR MY RIDE. ALL RIGHTS RESERVED. | PRIVACY POLICY | SITEMAP</p>
          <p>POWERED BY: ALL AUTO NETWORK</p>
        </div>
      </div>
    </>
  );
};
