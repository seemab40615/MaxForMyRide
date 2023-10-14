import { BannerSellVehicle } from "../BannerSellVehicle/BannerSellVehicle";
import { HeroSection } from "../HeroSection/HeroSection";
import { Footer } from "../footer/Footer";
import { HowItWorks } from "../HowItWorks/HowItWorks";
export const Landing = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
    <BannerSellVehicle />
      <Footer />
    </>
  );
};
