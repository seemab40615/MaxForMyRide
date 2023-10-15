import SimpleSlider from "../Slider/Slider";

export const SliderImages = () => {
    const images = [
        'https://placekitten.com/136/136',
        'https://placekitten.com/137/137',
        'https://placekitten.com/138/138',
        'https://placekitten.com/139/139',
        'https://placekitten.com/140/140',
        'https://placekitten.com/141/141',
        'https://placekitten.com/142/142',
        'https://placekitten.com/143/143',
        'https://placekitten.com/144/144',
        'https://placekitten.com/144/144',
        'https://placekitten.com/144/144'
      ];
    

  return (
    <div className="App">
      <SimpleSlider images={images} />
    </div>
  );
};
