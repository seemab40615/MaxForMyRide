
import Banner from '../../assets/images/slide-1.jpg'
export const HeroSection = () => {
  return (
    <>
      <div className="relative overscroll-contain grid lg:grid-cols-[minmax(0px,_870px)_minmax(0px,_570px)] md:grid-cols-1 text-white z-0 xs:flex-col-reverse lg:flex-row">
      <img class="max-w-[100vw] h-[75vh]" src={Banner} alt="Max For My Ride" />
      </div>
     
    </>
  );
};
