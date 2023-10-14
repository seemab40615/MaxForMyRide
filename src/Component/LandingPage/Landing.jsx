import { BannerSellVehicle } from "../BannerSellVehicle/BannerSellVehicle";
import { HeroSection } from "../HeroSection/HeroSection";
import { SliderImages } from "../SliderImages/SliderImages";
import { Footer } from "../footer/Footer";

export const Landing = () => {
  return (
    <>
      <HeroSection />
      <SliderImages />
    <BannerSellVehicle />
      <Footer />
    </>
  );
};
