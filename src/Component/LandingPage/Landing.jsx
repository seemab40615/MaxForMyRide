import { BannerSellVehicle } from "../BannerSellVehicle/BannerSellVehicle";
import { HeroSection } from "../HeroSection/HeroSection";
import { SliderImages } from "../SliderImages/SliderImages";
import { Footer } from "../footer/Footer";
import { HowItWorks } from "../HowItWorks/HowItWorks";
import { WhyChooseUs } from '../WhyChooseUs/WhyChooseUs';
import {Faq} from '../FAQ/faq';
export const Landing = () => {
  return (
    <>
      <HeroSection />
      <SliderImages />
      <BannerSellVehicle />
      <HowItWorks />
      <WhyChooseUs />
      <Faq />
      <Footer />
    </>
  );
};
