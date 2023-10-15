import { BannerSellVehicle } from "../BannerSellVehicle/BannerSellVehicle";
import { HeroSection } from "../HeroSection/HeroSection";
import { Footer } from "../footer/Footer";
import { HowItWorks } from "../HowItWorks/HowItWorks";
import { WhyChooseUs } from '../WhyChooseUs/WhyChooseUs'
export const Landing = () => {
  return (
    <>
      <HeroSection />
      <BannerSellVehicle />
      <HowItWorks />
      <WhyChooseUs />
      <Footer />
    </>
  );
};
