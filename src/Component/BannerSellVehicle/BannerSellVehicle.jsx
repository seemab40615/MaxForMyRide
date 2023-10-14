export const BannerSellVehicle = () => {
  return (
    <div className="banner-sell-vehicle-bg min-h-[80vh] h-full object-cover bg-cover bg-no-repeat">
      <div className="flex gap-x-[117px] max-w-[1440px] w-full mx-auto min-h-[80vh] h-full pt-40 pb-10">
        <div className="flex gap-y-4 flex-col max-w-[473px]">
          <div>
            <h1 className="text-[3rem] text-white font-bold leading-[3rem]">More For Your</h1>
            <h1 className="text-[56px] text-white font-bold leading-[56px]">
              Custom Vehicle
            </h1>
          </div>
          <p className="text-white text-[26px] leading-[34px]">
            We value custom cars, <br/>lifted trucks, and clean builds.
          </p>
          <button className="bg-primary text-white rounded-[10px] max-w-[300px] px-9 min-h-[46px] mt-5">
            Get Directions
          </button>
        </div>
        <div className="self-end">
          <h1 className="text-[3rem] text-white font-bold leading-[3rem]">Most Dealers Will Pay You Less,</h1>
          <h1 className="text-[6rem] text-white font-bold leading-[6rem]">We Pay More.</h1>
        </div>
      </div>
    </div>
  );
};
