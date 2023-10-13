import { Button } from "../UI/Button";
import graphGif from "../../assets/animations/graph.gif";

import { Gradient } from "../UI/Gradient";

export const HeroSection = () => {
  return (
    <>
      <div className="relative overscroll-contain grid lg:grid-cols-[minmax(0px,_870px)_minmax(0px,_570px)] md:grid-cols-1 text-white z-0 xs:flex-col-reverse lg:flex-row">
        <Gradient className="w-[800px] h-[800px] top-[-400px] left-[-400px] xs:hidden md:block" />
        <div className="xxl:pl-[120px] lg:pl-[60px] lg:pt-[150px] grid grid-cols-1 gap-y-[42px] auto-rows-max max-w-[750px] xs:pt-0 xs:w-full xs:px-[1rem] xs:row-start-2 xs:row-end-3 mds:row-start-auto xs:relative xs:top-auto xs:left-auto mds:absolute mds:top-[50%] mds:left-[50%] mds:transform mds:-translate-x-1/2 mds:translate-y-[15%] sm:translate-y-[15%] smd:translate-y-[38%] md:translate-y-[40%] md:w-full lg:relative lg:top-auto lg:left-auto lg:transform-none lg:row-start-1 lg:row-end-2 z-10 md">
          <div className="">
            <h1 className="max-w-[750px] hover-scale w-full self-start xs:text-[62px] xs:leading-[62px] mds:text-[70px] mds:leading-[70px] sm:text-[80px] sm:leading-[80px] smd:text-[100px] smd:leading-[100px] md:text-[90px] md:leading-[90px] xl:text-[96px] xl:leading-[96px] font-sfPro uppercase text-primary flex flex-col">
              <span>
                <span className="">
                  Leverag<span className="font-gridular">e</span>
                </span>
                d
              </span>
              <span>
                <span className="font-gridular">s</span>ports
              </span>
              <span className="font-gridular">betting</span>
            </h1>
          </div>

          <div className="place-self-end leading-[20.8px] tracking-[0.16px] flex flex-col gap-y-6">
            <p className="text-primary w-full max-w-[450px] pr-[42px]">
              Elevate your betting experience with vig: uncover the power of
              leveraged sports futures for enhanced payouts alongside heightened
              risk factors
            </p>
            <Button
              className=" bg-primary hover:text-primary hover:bg-navItemGradient"
              text="Waitlist Today"
            />
          </div>
        </div>

        <img
          src={graphGif}
          alt="about gif"
          className="flex-1 absoute -mt-[60px] right-0 w-full z-0"
        />
      </div>
      {/* <div className="md:hidden xs:block xs:mb-[110px] w-[100px] h-[200px]"></div> */}
    </>
  );
};
