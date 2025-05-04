import HeroGradient from "../hero/HeroGradient";
import HeroText from "../hero/HeroText";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/hero/visa-hero.png"
    >
      <HeroText
        imgSrc="/images/globe-logo.png"
        altText="Globe logo"
        title="Visa Requirements"
        description="Visa requirements for travelers to Tunisia"
        arrowText="Check them out"
        takeMeTo="visa-free"
      />
    </HeroGradient>
  );
};

export default Hero;
