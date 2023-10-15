import SimpleSlider from "../Slider/Slider";
import SliderOne from '../../assets/assets/images/partner-1.svg';
import SliderTwo from '../../assets/assets/images/partner-2.svg';
import SliderThree from '../../assets/assets/images/partner-3.svg';
import SliderFour from '../../assets/assets/images/partner-4.svg';
import SliderFive from '../../assets/assets/images/partner-5.svg';
import Slidersix from '../../assets/assets/images/partner-6.svg';
import SliderSeven from '../../assets/assets/images/partner-7.svg';
import SliderEight from '../../assets/assets/images/partner-8.svg';
import SliderNine from '../../assets/assets/images/partner-9.svg';
import SliderTen from '../../assets/assets/images/partner-10.svg';

export const SliderImages = () => {
    const images = [
      SliderOne,
      SliderTwo,
      SliderThree,
      SliderFour,
      SliderFive,
      Slidersix,
      SliderSeven,
      SliderEight,
      SliderNine,
      SliderTen
      ];
    

  return (
    <div className="App">
      <SimpleSlider images={images} />
    </div>
  );
};
