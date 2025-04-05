import HeroGradient from "../hero/HeroGradient";
import HeroText from "../hero/HeroText";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="video"
      backgroundSrc="/videos/tunisia-video.mp4"
    >
      <HeroText
        imgSrc="/images/countries/tunisia.png"
        altText="Tunisia logo"
        imgDim={100}
        title="Tunisia"
        description="IEEE R8 MENASYP 2025 Host Country"
        arrowText="Learn more about Tunisia"
        takeMeTo="#discover"
      />
    </HeroGradient>
  );
};

export default Hero;
