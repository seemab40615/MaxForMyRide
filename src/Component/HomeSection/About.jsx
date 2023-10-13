import { Link } from "react-router-dom";
import aboutGif from "../../assets/animations/about.gif";
import { Button } from "../UI/Button";
import { Gradient } from "../UI/Gradient";

export const About = () => (
  <div className="relative overflow-contain grid xxl:grid-cols-[minmax(0px,_300px)_minmax(0px,_450px)_minmax(0px,_450px)] xxl:gap-y-[42px] md:p-0 md:grid-cols-[minmax(0px,_300px)_minmax(0px,_450px)_minmax(0px,_450px)] smd:grid-cols-1 xs:grid-cols-1 xs:p-[1rem]">
    <p className="text-[16px] xs:leading-[21px] md:leading-[16px] text-primary font-gridular uppercase">
      About
    </p>
    <img
      src={aboutGif}
      alt="about gif"
      width={350}
      height={252}
      className="xs:pr-0 md:pr-[100px] xs:pt-0 md:pt-[53px] xs:place-self-center md:place-self-start"
    />

    <h1 className="smd:col-start-2 smd:col-end-3 md:col-start-2 md:col-end-4 xxl:col-start-3 xxl:col-end-4 hover-scale uppercase text-primary font-sfPro  leading-[43.2px] text-4xl  xs:place-self-center md:place-self-start">
      <span className="font-gridular">Vig</span> is a s
      <span className="font-gridular">t</span>ate-of-t
      <span className="font-gridular">h</span>e-art betti
      <span className="font-gridular">n</span>g{" "}
      <span className="font-lato">p</span>l
      <span className="font-gridular">a</span>tform that all
      <span className="font-gridular">o</span>
      ws u<span className="font-gridular">s</span>ers to le
      <span className="font-gridular">v</span>erage their bets on sports fu
      <span className="font-gridular">t</span>ures, a
      <span className="font-gridular">m</span>plifying bo
      <span className="font-gridular">t</span>h pot
      <span className="font-gridular">e</span>ntial returns and ri
      <span className="font-gridular">s</span>ks
    </h1>

    <div className="smd:col-start-2 smd:col-end-4 xxl:col-start-3 xxl:col-end-4 max-w-[450px] flex flex-col gap-y-4 mt-[42px]  xs:place-self-start smd:place-self-start">
      <p className="text-darkPrimary leading-[20.8px] tracking-[0.16px]">
        By integrating advanced algorithms that monitor real-time odds from
        various oddsmakers, the platform ensures bettors remain aware of their
        positions and potential liquidation scenarios.
      </p>
      <Link to="/contact"><Button
        className="bg-darkPrimary bg-opacity-10 text-primary hover:text-black hover:bg-primary"
        text="Contact us"
      /></Link>
    </div>
    <Gradient className="-left-[780px] w-[800px] h-[800px]" />
  </div>
);
